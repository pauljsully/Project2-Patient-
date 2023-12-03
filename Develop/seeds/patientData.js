// age, weight, description, patient photo, etc
//------------------------------------------------//
const { Patient } = require('../models');

const patientData = [
  {
    name:'Alan Judge',
    age: '63',
    weight: '85',
    description: '..',
    patient_photo: 'patient2.jpg',
    user_id: 1,
  },
  {
    name: 'Isabelle Sharp',
    age: '22',
    weight: '56',
    description: '...',
    patient_photo: 'patient1.jpg',
    user_id: 1,
  },
  {
    name:'Jeremy Strong',
    age: '38',
    weight: '83',
    description: '...',
    patient_photo: 'patient3.jpg',
    user_id: 1,
  },
  {
    name:'',
    age: '#',
    weight: '#',
    description: '...',
    patient_photo: 'patient4.jpg',
    user_id: 2,
  },
  {
    name:'#',
    age: '#',
    weight: '#',
    description: '#',
    patient_photo: 'patient5.jpg',
    user_id: 2,
  },
  {
    name:'#',
    age: '#',
    weight: '#',
    description: '#',
    patient_photo: 'patient6.jpg',
    user_id: 2,
  },
  {
    name:'#',
    age: '#',
    weight: '#',
    description: '#',
    patient_photo: 'patient7.jpg',
    user_id: 3,
  },
  {
    name:'#',
    age: '#',
    weight: '#',
    description: '#',
    patient_photo: 'patient8.jpg',
    user_id: 3,
  },
  {
    name:'#',
    age: '#',
    weight: '#',
    description: '#',
    patient_photo: 'patient9.jpg',
    user_id: 3,
  },
];

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;