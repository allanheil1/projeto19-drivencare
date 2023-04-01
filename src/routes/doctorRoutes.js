import { Router } from 'express';
import doctorController from '../controllers/doctorController.js';
import { validateSchema}  from '../middlewares/schemaValidationMiddleware.js';
import { doctorSchema } from '../schemas/doctor.js';

const doctorRoutes = Router();

doctorRoutes.post('/sign-up', validateSchema(doctorSchema), doctorController.create);
doctorRoutes.post('/sign-in', doctorController.signIn);

export default doctorRoutes;