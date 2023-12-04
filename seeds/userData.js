const { User } = require('../models');

const userdata = [
  {
    username: 'Juell Anthony',
    email: '#',
    password: '#',
  },
  {
    username: 'Paul Sulivan',
    email: 'paul8sullivan@gmail.com',
    password: '#',
  },
  {
    username: 'Sammy Hassouneh',
    email: '#',
    password: '#',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
