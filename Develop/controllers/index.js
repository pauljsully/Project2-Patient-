const router = require('express').Router();

const apiRoutes = require('./api');
const paulRoutes = require('./paul-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;