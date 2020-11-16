const mongoose = require('mongoose');

const registrationFOSchema = new mongoose.Schema({
    firstNameFO: {
        type: String,
        required: 'Please Enter first name'
    },
    lastNameFO: String,
    foNIN: String,
    //{
    //     type: String,
    //     unique: true,
    //     required: 'Please Enter NIN number'
    // },
    phoneNumberFO: String,
    ward: String,
    stayPeriod: String,
    residenceType:String,
    dobFO:String,
    dorFO:String,
    produceType: [{
        type: String
    }],
    gender: String,
  });


  module.exports = mongoose.model('RegistrationFO', registrationFOSchema);