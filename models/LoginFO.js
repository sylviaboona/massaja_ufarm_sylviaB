//Require mongoose package
const mongoose = require('mongoose');


const loginFOSchema = new mongoose.Schema({
    userNameFO: {
      type: String,
      trim: true, //Removes the white spaces left by the users
    },
    pwdFO: {
        type: String,
        trim: true,
      },
  });
  //Export the model LoginFO
  module.exports = mongoose.model('LoginFO', loginFOSchema);