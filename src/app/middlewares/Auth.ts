import jwt, { type JwtPayload } from 'jsonwebtoken';
import { type HookHandlerDoneFunction, type FastifyReply, type FastifyRequest } from 'fastify';
import { env } from '@/env';

export const AuthMiddleware = (
  req: FastifyRequest,
  res: FastifyReply,
  done: HookHandlerDoneFunction,
) => {
  const jwtAuthorization = req.headers.authorization;

  if (!jwtAuthorization) {
    res.status(401).send({ error: 'Unauthorized' });
  }

  const [, token] = jwtAuthorization.split(' ');

  try {
    const { id } = jwt.verify(token, env.JWT_SECRET) as JwtPayload;

    req.user = id;

    done();
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: 'Unauthorized' });
  }
};
