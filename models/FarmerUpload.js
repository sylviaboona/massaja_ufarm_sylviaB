const mongoose = require('mongoose');
const farmeruploadSchema = new mongoose.Schema({

    productName: String,
    productDescription: String,
    productImage: String,
    price:String,
    productType: String,
    uploadDate: String,
    ward: String,
    status: String,
    phoneContact: String,
    quantity: String,
    username: String,
    firstNameUF: String,
    lastNameUF: String,
  });

  module.exports = mongoose.model('FarmerUpload', farmeruploadSchema);