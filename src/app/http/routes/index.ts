import { type FastifyInstance } from 'fastify';

import HealthCheck from '@/app/helpers/HealthCheck';

import { cellsRoutes } from '../controllers/cells/routes';
import { patientsRoutes } from '../controllers/patients/routes';
import { usersRoutes } from '../controllers/users/routes';

export async function appRoutes(app: FastifyInstance) {
  app.get('/', HealthCheck);

  app.register(usersRoutes);
  app.register(patientsRoutes);
  app.register(cellsRoutes);
}
