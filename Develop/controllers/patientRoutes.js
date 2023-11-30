const router = require('express').Router();
const { Patient, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth')

// we need to have basic routes to all user patients/individual patients
// we also need routes for POST, PUT, and DELETE patients



module.exports = router;