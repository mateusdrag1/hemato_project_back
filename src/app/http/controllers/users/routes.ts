import { type FastifyInstance } from 'fastify';
import { authenticate } from './authenticate.controller';
import { register } from './register.controller';
import { refreshToken } from './refresh.controller';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', register);
  app.post('/login', authenticate);

  app.patch('/refresh-token', refreshToken);
}
