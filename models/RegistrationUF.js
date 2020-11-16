const mongoose = require('mongoose');

const registrationUFSchema = new mongoose.Schema({
    firstNameUF: {
        type: String,
        required: 'Please Enter first name'
    },
    lastNameUF: String, 
    dobUF:String,
    dorUF:String,
    ufNIN:  {
        type: String,
        required: 'Please Enter NIN number'
    },
    phoneNumberUF: String,
    phoneNumberUF2: String,
    wardUF: String,
    produceType: [{
        type: String
    }],
    gender: String,
  });
  module.exports = mongoose.model('RegistrationUF', registrationUFSchema);