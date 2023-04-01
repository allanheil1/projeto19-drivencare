import { Router } from 'express';
import appointmentController from '../controllers/appointmentController.js';
import { tokenValidatePatient } from '../middlewares/authMiddleware.js';
import { validateSchema }  from '../middlewares/schemaValidationMiddleware.js';
import { appointmentSchema } from '../schemas/appointment.js';

const appointmentRoutes = Router();

appointmentRoutes.post('/', tokenValidatePatient, validateSchema(appointmentSchema), appointmentController.create);

export default appointmentRoutes;