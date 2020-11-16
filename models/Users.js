const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: 'Please Enter User Name' 
    },
    password: String,
    role:String
  });

  userSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('Users', userSchema);