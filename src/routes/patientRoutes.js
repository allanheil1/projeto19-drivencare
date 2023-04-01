import { Router } from 'express';
import patientController from '../controllers/patientController.js';
import { validateSchema } from '../middlewares/schemaValidationMiddleware.js';
import { patientSchema } from '../schemas/patient.js';

const patientRoutes = Router();

patientRoutes.post('/sign-up', validateSchema(patientSchema), patientController.create);
patientRoutes.post('/sign-in', patientController.signIn);

export default patientRoutes;