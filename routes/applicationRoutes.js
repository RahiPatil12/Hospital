import { Router } from 'express';
import { createApplication, getApplications } from '../controllers/applicationControllers.js'; // Ensure correct path

const router = Router();

router.post('/applications', createApplication);
router.get('/applications', getApplications);

export default router;
