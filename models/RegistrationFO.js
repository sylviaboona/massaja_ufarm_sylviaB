const mongoose = require('mongoose');

const registrationFOSchema = new mongoose.Schema({
    firstNameFO: {
        type: String,
        required: 'Please Enter first name'
    },
    lastNameFO: String,
    // username:{
    //     type: String,
    //     unique: true,
    //     required: 'Please Enter User name' 
    // },
    dobFO:String,
    dorFO:String,
    foNumber: String,
    foNIN:  {
        type: String,
        required: 'Please Enter NIN number'
    },
    phoneNumberFO: String,
    ward: String,
    stayPeriod: String,
    residenceType:String,
    productType: String,
    gender: String,
  });

  module.exports = mongoose.model('RegistrationFO', registrationFOSchema);