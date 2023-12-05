const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPatient = require('./patientData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPatient();

  process.exit(0);
};



seedAll();

