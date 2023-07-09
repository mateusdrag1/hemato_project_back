import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/Auth';
import { UserController } from '../controllers/user.controller';
import { PatientController } from '../controllers/patient.controller';
import HealthCheck from '../helpers/HealthCheck';

const userController = new UserController();
const patientsController = new PatientController();
const routes = Router();

routes.get('/', HealthCheck);

// User routes
routes.get('/users', AuthMiddleware, userController.index);
routes.get('/users/:id', AuthMiddleware, userController.show);
routes.post('/register', userController.store);
routes.post('/login', userController.login);

// Pacient routes
routes.get('/pacients', AuthMiddleware, patientsController.index);
routes.get('/pacients/:id', AuthMiddleware, patientsController.show);
routes.post('/pacients', AuthMiddleware, patientsController.store);
routes.put('/pacients/:id', AuthMiddleware, patientsController.update);
routes.delete('/pacients/:id', AuthMiddleware, patientsController.delete);

// Save Series from Pacient
routes.post('/pacients/:id/erythrocytes', AuthMiddleware, patientsController.saveErythrocyte);
routes.post('/pacients/:id/leukocytes', AuthMiddleware, patientsController.saveLeukocyte);
routes.post('/pacients/:id/platelets', AuthMiddleware, patientsController.savePlatelet);

export default routes;
