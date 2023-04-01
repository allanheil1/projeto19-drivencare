import { Router } from 'express';
import doctorController from '../controllers/doctorController.js';
import { validateSchema}  from '../middlewares/schemaValidationMiddleware.js';
import { doctorSchema } from '../schemas/doctor.js';
import { tokenValidatePatient } from '../middlewares/authMiddleware.js';

const doctorRoutes = Router();

doctorRoutes.post('/sign-up', validateSchema(doctorSchema), doctorController.create);
doctorRoutes.post('/sign-in', doctorController.signIn);
doctorRoutes.get('/search', tokenValidatePatient, doctorController.search);

export default doctorRoutes;