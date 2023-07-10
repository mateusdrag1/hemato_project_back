/* eslint-disable @typescript-eslint/no-misused-promises */
import { AuthMiddleware } from '../middlewares/Auth';

import HealthCheck from '../helpers/HealthCheck';
import { type FastifyInstance } from 'fastify';
import { register } from '../controllers/register.controller';
import { authenticate } from '../controllers/authenticate.controller';
import { createPatient } from '../controllers/create-patient.controller';
import { getPatients } from '../controllers/get-patients.controller';
import { removePatient } from '../controllers/remove-patient.controller';
import { saveErythrocyte } from '../controllers/save-erythrocyte.controller';
import { savePlatelets } from '../controllers/save-platelets.controller';
import { saveLeukocyte } from '../controllers/save-leukocyte.controller';

export async function appRoutes(app: FastifyInstance) {
  app.get('/', HealthCheck);

  app.post('/register', register);
  app.post('/login', authenticate);

  app.get(
    '/patients',
    {
      preHandler: AuthMiddleware,
    },
    getPatients,
  );

  app.post(
    '/patients',
    {
      preHandler: AuthMiddleware,
    },
    createPatient,
  );

  app.delete(
    '/patients/:id',
    {
      preHandler: AuthMiddleware,
    },
    removePatient,
  );

  app.post(
    '/patients/:id/erythrocytes',
    {
      preHandler: AuthMiddleware,
    },
    saveErythrocyte,
  );

  app.post(
    '/patients/:id/leukocytes',
    {
      preHandler: AuthMiddleware,
    },
    saveLeukocyte,
  );

  app.post(
    '/patients/:id/platelets',
    {
      preHandler: AuthMiddleware,
    },
    savePlatelets,
  );
}
