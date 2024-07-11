const express = require('express');
const { createApplication, getApplications } = require('../controllers/applicationControllers');
const router = express.Router();

router.post('/application', createApplication);
router.get('/applications', getApplications);

module.exports = router;
