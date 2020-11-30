const mongoose = require('mongoose');

const registrationFOSchema = new mongoose.Schema({
    firstNameFO: {
        type: String,
        required: 'Please Enter first name'
    },
    lastNameFO: String,
    username: String,
    foNIN: String,
    phoneNumberFO: String,
    ward: String,
    stayPeriod: String,
    residenceType:String,
    role: String,
    dobFO:String,
    dorFO:String,
    produceType: [{
        type: String
    }],
    gender: String,
  });


  module.exports = mongoose.model('RegistrationFO', registrationFOSchema);