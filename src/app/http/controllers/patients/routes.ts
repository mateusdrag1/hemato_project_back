import { type FastifyInstance } from 'fastify';
import { verifyJWT } from '../../middlewares/verify-jwt';
import { createPatient } from './create-patient.controller';
import { getPatients } from './get-patients.controller';
import { removePatient } from './remove-patient.controller';
import { saveErythrocyte } from './save-erythrocyte.controller';
import { saveLeukocyte } from './save-leukocyte.controller';
import { savePlatelets } from './save-platelets.controller';
import { saveUrineTest } from './save-urine-test.controller';

export async function patientsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.get('/patients', getPatients);

  app.post('/patients', createPatient);

  app.delete('/patients/:id', removePatient);

  app.post('/patients/:id/erythrocytes', saveErythrocyte);

  app.post('/patients/:id/leukocytes', saveLeukocyte);

  app.post('/patients/:id/platelets', savePlatelets);

  app.post('/patients/:id/urine', saveUrineTest);
}
