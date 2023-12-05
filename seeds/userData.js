const { User } = require('../models');

const userdata = [
  {
    username: 'Juell Anthony',
    email: 'ju3llanthony@gmail.com',
    password: '#',
  },
  {
    username: 'Paul Sulivan',
    email: 'paul8sullivan@gmail.com',
    password: '#',
  },
  {
    username: 'Sammy Hassouneh',
    email: 'hassounehsam@gmail.com',
    password: '#',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
