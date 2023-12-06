const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// i want to make the hompage the login page
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;