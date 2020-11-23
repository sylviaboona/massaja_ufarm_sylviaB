const mongoose = require('mongoose');
const farmeruploadSchema = new mongoose.Schema({

    productName: String,
    productDescription: String,
    productImage: String,
    price:String,
    productType: String,
    uploadDate: String,
    ward: String,
    paymentMode: String,
    delivery:String,
    status: String,
    phoneContact: String,
    quantity: String,
  });

  module.exports = mongoose.model('FarmerUpload', farmeruploadSchema);