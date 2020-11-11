//Require mongoose package
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const loginAOSchema = new mongoose.Schema({
    emailAO: {
      type: String,
      trim: true, //Removes the white spaces left by the users
    },
    pwdAO: {
        type: String,
        trim: true,
      },
  });
  loginAOSchema.plugin(passportLocalMongoose);
  //Export the model LoginAO
  module.exports = mongoose.model('LoginAO', loginAOSchema);