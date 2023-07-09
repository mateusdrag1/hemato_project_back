/* eslint-disable @typescript-eslint/no-misused-promises */
import { AuthMiddleware } from '../middlewares/Auth';

import HealthCheck from '../helpers/HealthCheck';
import { type FastifyInstance } from 'fastify';
import { register } from '../controllers/register.controller';
import { authenticate } from '../controllers/authenticate.controller';
import { createPatient } from '../controllers/create-patient.controller';
import { getPatients } from '../controllers/get-patients.controller';
import { removePatient } from '../controllers/remove-patient.controller';

export async function appRoutes(app: FastifyInstance) {
  app.get('/', HealthCheck);

  app.post('/register', register);
  app.post('/login', authenticate);

  app.get(
    '/pacients',
    {
      preHandler: AuthMiddleware,
    },
    getPatients,
  );

  app.post(
    '/pacients',
    {
      preHandler: AuthMiddleware,
    },
    createPatient,
  );

  app.delete(
    '/pacients/:id',
    {
      preHandler: AuthMiddleware,
    },
    removePatient,
  );

  // // Save Series from Pacient
  // app.post(
  //   '/pacients/:id/erythrocytes',
  //   {
  //     preHandler: AuthMiddleware,
  //   },
  //   patientsController.saveErythrocyte,
  // );
  // app.post(
  //   '/pacients/:id/leukocytes',
  //   {
  //     preHandler: AuthMiddleware,
  //   },
  //   patientsController.saveLeukocyte,
  // );
  // app.post(
  //   '/pacients/:id/platelets',
  //   {
  //     preHandler: AuthMiddleware,
  //   },
  //   patientsController.savePlatelet,
  // );
}
