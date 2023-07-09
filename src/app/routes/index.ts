/* eslint-disable @typescript-eslint/no-misused-promises */
import { AuthMiddleware } from '../middlewares/Auth';

import { PatientController } from '../controllers/patient.controller';
import HealthCheck from '../helpers/HealthCheck';
import { type FastifyInstance } from 'fastify';
import { register } from '../controllers/register.controller';
import { authenticate } from '../controllers/authenticate.controller';

const patientsController = new PatientController();

export async function appRoutes(app: FastifyInstance) {
  app.get('/', HealthCheck);

  app.post('/register', register);
  app.post('/login', authenticate);

  // Pacient app
  app.get(
    '/pacients',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.index,
  );
  app.get(
    '/pacients/:id',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.show,
  );
  app.post(
    '/pacients',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.store,
  );
  app.put(
    '/pacients/:id',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.update,
  );
  app.delete(
    '/pacients/:id',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.delete,
  );

  // Save Series from Pacient
  app.post(
    '/pacients/:id/erythrocytes',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.saveErythrocyte,
  );
  app.post(
    '/pacients/:id/leukocytes',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.saveLeukocyte,
  );
  app.post(
    '/pacients/:id/platelets',
    {
      preHandler: AuthMiddleware,
    },
    patientsController.savePlatelet,
  );
}
