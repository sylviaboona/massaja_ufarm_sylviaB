//Require mongoose package
const mongoose = require('mongoose');

const loginUFSchema = new mongoose.Schema({
    userNameUF: {
      type: String,
      trim: true, //Removes the white spaces left by the users
    },
    idNumber: {
        type: String,
        trim: true,
      },
  });
  //Export the model LoginUF
  module.exports = mongoose.model('LoginUF', loginUFSchema);