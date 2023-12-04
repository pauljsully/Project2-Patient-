// age, weight, description, patient photo, etc
//------------------------------------------------//
const { Patient } = require('../models');

const patientData = [
  {
    name:'Alan Judge',
    age: '53',
    weight: '85',
    description: 'Recovering from a recent flu, no other chronic conditions.',
    patient_photo: 'patient2.jpg',
    user_id: 1,
  },
  {
    name: 'Isabelle Sharp',
    age: '22',
    weight: '56',
    description: 'Generally healthy, occasional allergies.',
    patient_photo: 'patient1.jpg',
    user_id: 1,
  },
  {
    name:'Jeremy Strong',
    age: '58',
    weight: '83',
    description: 'Managing hypertension with medication, otherwise stable.',
    patient_photo: 'patient3.jpg',
    user_id: 1,
  },
  {
    name:'Samuel Rodriguez',
    age: '34',
    weight: '78',
    description: 'Regular exercise routine, no known health issues.',
    patient_photo: 'patient4.jpg',
    user_id: 2,
  },
  {
    name:'Ava Thompson',
    age: '32',
    weight: '55',
    description: 'Recovering from a recent flu, no other chronic conditions.',
    patient_photo: 'patient5.jpg',
    user_id: 2,
  },
  {
    name:'Ethan Foster',
    age: '29',
    weight: '70',
    description: 'Seasonal allergies, no other significant health concerns.',
    patient_photo: 'patient6.jpg',
    user_id: 2,
  },
  {
    name:'Ryan Mitchell',
    age: '35',
    weight: '77',
    description: 'Regular smoker, working on quitting; occasional back pain.',
    patient_photo: 'patient7.jpg',
    user_id: 3,
  },
  {
    name:'Sophia Carter',
    age: '44',
    weight: '58',
    description: 'Recovered from recent surgery, otherwise in good health.',
    patient_photo: 'patient8.jpg',
    user_id: 3,
  },
  {
    name:'Jason Reynolds',
    age: '27',
    weight: '80',
    description: 'Regular exercise routine, no known health issues.',
    patient_photo: 'patient9.jpg',
    user_id: 3,
  },
];

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;