const user = require('./user');
const patient = require('./patient');

user.hasMany(patient, {
  foreignKey: '',
});

patient.belongsTo(user, {
  foreignKey: '',
});

module.exports = { user, patient };