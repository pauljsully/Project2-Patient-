const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
// const patientRoutes = require('./patientRoutes');

router.use('/login', loginRoutes);
// router.use('/patient', patientRoutes);

module.exports = router;
