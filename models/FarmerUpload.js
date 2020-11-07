const mongoose = require('mongoose');
const farmeruploadSchema = new mongoose.Schema({
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
    userNameFO: String,
    foNumber: String,
    foNIN:  {
        type: String,
        required: 'Please Enter NIN number'
    },
    phoneNumberFO: String,
    ward: String,
    stayPeriod: String,
    residenceType:String,
    dobFO:String,
    dorFO:String,
    productType: String,
    gender: String,
  });

  module.exports = mongoose.model('FarmerUpload', farmeruploadSchema);