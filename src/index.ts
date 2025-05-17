import { appRoutes } from '@/app/http/routes';
import { env } from '@/env';
import { error, log } from '@/utils/Logger';
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';
import fastify, { type FastifyInstance } from 'fastify';
import { ZodError } from 'zod';

class App {
  public app: FastifyInstance;

  constructor() {
    this.app = fastify();

    this.routesConfig();

    this.start();
  }

  private async routesConfig() {
    this.app.register(cors, {
      origin: '*',
      methods: '*',
      allowedHeaders: '*',
    });

    this.app.register(fastifyJwt, {
      secret: env.JWT_SECRET,
      cookie: {
        cookieName: 'refreshToken',
        signed: false,
      },
      sign: {
        expiresIn: '10m',
      },
    });

    this.app.register(fastifyCookie);

    this.app.register(appRoutes);

    this.app.setErrorHandler((err, _request, response) => {
      error(err.message);

      if (err instanceof ZodError) {
        return response.status(400).send({
          statusCode: 400,
          error: 'Validation Error',
          message: err.format(),
        });
      }

      if (env.NODE_ENV !== 'production') {
        error(err.message);
      } else {
        // TODO: add error reporting service
      }

      response.status(500).send({
        error: 'Internal Server Error',
        message: 'Something went wrong',
      });
    });
  }

  private async start() {
    await this.app
      .listen({
        host: '0.0.0.0',
        port: env.PORT,
      })
      .then((address) => {
        log(`HTTP server started on ${address}`);
      })
      .catch((err) => {
        error(`Server failed to start on port ${env.PORT}`);
        console.error(err);
        process.exit(1);
      });
  }
}

export default new App().app;
