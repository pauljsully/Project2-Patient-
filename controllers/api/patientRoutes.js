const router = require('express').Router();
const { Patient } = require('../../models');
// Import the custom middleware
// const withAuth = require('../../utils/auth')

// we need to have basic routes to all user patients/individual patients
// we also need routes for POST, PUT, and DELETE patients
// GET all patients
router.get('/', async (req, res) => {
    try {
      const dbPatientData = await Patient.findAll({
        include: [
          {
            model: Patient,
            attributes: ['name', 'age', 'weight', 'description'],
          },
        ],
      });
  
      const patients = dbPatientData.map((patient) =>
        patient.get({ plain: true })
      );
  
      res.render('patientportals', {
        patients,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one patient
  // Use the custom middleware before allowing the user to access the gallery
  //router.get('/patient/:id', withAuth, async (req, res) => {
  router.get('/patient/:id', async (req, res) => {
    try {
      const dbPatientData = await Patient.findByPk(req.params.id, {
        include: [
          {
            model: Patient,
            attributes: [
              'id',
              'name',
              'age',
              'weight',
              'description',
            ],
          },
        ],
      });
  
      const patient = dbPatientData.get({ plain: true });
      res.render('patient-details', {
        patient,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  // Use the custom middleware before allowing the user to access the painting
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;


module.exports = router;