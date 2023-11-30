const router = require('express').Router();

const apiRoutes = require('./api');
const patientRoutes = require('./patientRoutes.js');

// i want to make the hompage the login page
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/patient', patientRoutes);

module.exports = router;