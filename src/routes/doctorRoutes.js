import { Router } from 'express';
//import doctorController from '../controllers/doctorController.js';
import { validateSchema}  from '../middlewares/schemaValidationMiddleware.js';
import { doctorSchema } from '../schemas/doctor.js';

const doctorRoutes = Router();

//doctorRoutes.post('/', validateSchema(doctorSchema), doctorController.create);

export default doctorRoutes;