import { Router } from 'express';
//import appointmentController from '../controllers/appointmentController.js';
import { validateSchema}  from '../middlewares/schemaValidationMiddleware.js';

const appointmentRoutes = Router();

//appointmentRoutes.post('/', appointmentController.create);

export default appointmentRoutes;