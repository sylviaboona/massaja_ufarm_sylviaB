const mongoose = require('mongoose');

const registrationAOSchema = new mongoose.Schema({
    firstNameFO: {
        type: String,
        required: 'Please Enter first name'
    },
    lastNameFO: String,
    username: String,
    phoneNumberFO: String,
    ward: String,
    gender: String,
  });


  module.exports = mongoose.model('RegistrationAO', registrationAOSchema);