import { type FastifyInstance } from 'fastify';
import { authenticate } from './authenticate.controller';
import { register } from './register.controller';
import { refreshToken } from './refresh.controller';
import { deleteAccount } from './delete-account.controller';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/register', register);
  app.post('/login', authenticate);
  app.post('/delete-account', deleteAccount);

  app.patch('/refresh-token', refreshToken);
}
