const router = require('express').Router();

const apiRoutes = require('./api');
const loginRoutes = require('./loginRoutes');

// i want to make the hompage the login page
router.use('/', loginRoutes);
router.use('/api', apiRoutes);

module.exports = router;