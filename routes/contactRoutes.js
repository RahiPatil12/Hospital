import { Router } from 'express';
import contactController from '../controllers/contactController.js'; 

const { createContact } = contactController; 
const router = Router();

router.post('/contact', createContact);

export default router;
