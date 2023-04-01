import { Router } from 'express';
import appointmentController from '../controllers/appointmentController.js';
import { tokenValidateDoctor, tokenValidatePatient } from '../middlewares/authMiddleware.js';
import { validateSchema } from '../middlewares/schemaValidationMiddleware.js';
import { appointmentSchema } from '../schemas/appointment.js';

const appointmentRoutes = Router();

appointmentRoutes.post('/', tokenValidatePatient, validateSchema(appointmentSchema), appointmentController.create);
appointmentRoutes.get('/patient', tokenValidatePatient, appointmentController.searchByPatient);
appointmentRoutes.get('/doctor', tokenValidateDoctor, appointmentController.searchByDoctor);

export default appointmentRoutes;