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
import { saveUrineTest } from '../controllers/save-urine-test.controller';
import { createCategory } from '../controllers/create-category.controller';
import { createMention } from '../controllers/create-mention.controller';
import { getCategories } from '../controllers/get-categories.controller';
import { getMentions } from '../controllers/get-mentions.controller';
import { createCell } from '../controllers/create-cell.controller';
import { getCells } from '../controllers/get-cells.controller';
import { upload } from '../controllers/upload.controller';

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

  app.post(
    '/patients/:id/urine',
    {
      preHandler: AuthMiddleware,
    },
    saveUrineTest,
  );

  app.post(
    '/categories',
    {
      preHandler: AuthMiddleware,
    },
    createCategory,
  );

  app.post(
    '/mentions',
    {
      preHandler: AuthMiddleware,
    },
    createMention,
  );

  app.get(
    '/categories',
    {
      preHandler: AuthMiddleware,
    },
    getCategories,
  );

  app.get(
    '/mentions',
    {
      preHandler: AuthMiddleware,
    },
    getMentions,
  );

  app.post(
    '/cells',
    {
      preHandler: AuthMiddleware,
    },
    createCell,
  );

  app.get(
    '/cells',
    {
      preHandler: AuthMiddleware,
    },
    getCells,
  );

  app.post(
    '/upload',
    {
      preHandler: AuthMiddleware,
    },
    upload,
  );
}
