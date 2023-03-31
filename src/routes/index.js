import { Router } from 'express';
import patientRoutes from './patientRoutes.js';
import doctorRoutes from './doctorRoutes.js';
import appointmentRoutes from './appointmentRoutes.js';

const routes = Router();

routes.use('/patient', patientRoutes);
routes.use('/doctors', doctorRoutes);
routes.use('/appointment', appointmentRoutes);

export default routes;