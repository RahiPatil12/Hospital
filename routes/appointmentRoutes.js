import { Router } from 'express';
const router = Router();
import { createAppointment, getAllAppointments, updateAppointment, deleteAppointment } from '../controllers/appointmentController';

router.post('/appoint', createAppointment);
router.get('/appointments', getAllAppointments);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);


export default router;
