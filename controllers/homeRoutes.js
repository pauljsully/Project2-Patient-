const router = require('express').Router();
const { Patient, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/patients', async (req, res) => {
    try {
      const patientData = await Patient.findAll({
        where: { user_id: req.session.user_id },
        include: [{ model: Patient,
        attributes: ['name', 'age', 'weight'],
        }]
      });
  
      const patients = patientData.map((patient) => patient.get({ plain: true }));
  
      res.render('patients', {
        patients,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
    
  

  router.get('/patient/:id', async (req, res) => {

        try {
          const patientData = await Patient.findByPk(req.params.id, {
            where: { user_id: req.session.user_id },
            // Ensure the patient belongs to the logged-in user
            include: [
              {
                model: User,
                attributes: ['name'],
              },
              // Include additional attributes from the Patient model
              {
                model: Patient,
                attributes: ['name', 'age', 'weight', 'description', 'patient_photo'],
              },
            ],
          });
      
          if (!patientData) {
            res.status(404).json({ message: 'Patient not found' });
            return;
          }
      
          const patient = patientData.get({ plain: true });
      
          res.render('patient', {
            ...patient,
            logged_in: req.session.logged_in,
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });
      

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
         attributes: { exclude: ['password'] },
         include: [{ model: Patient }],
        });
      
        const user = userData.get({ plain: true });
      
        res.render('profile', {
            ...user,
            logged_in: true,
        });
        } catch (err) {
         res.status(500).json(err);
     }
    });
      

router.get('/login', (req, res) => {
 // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
