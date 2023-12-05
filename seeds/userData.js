const { User } = require('../models');

const userdata = [
  {
    username: 'Juell Anthony',
    email: 'ju3llanthony@gmail.com',
    password: 'password123',
  },
  {
    username: 'Paul Sulivan',
    email: 'paul8sullivan@gmail.com',
    password: 'password123',
  },
  {
    username: 'Sammy Hassouneh',
    email: 'hassounehsam@gmail.com',
    password: 'password123',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
