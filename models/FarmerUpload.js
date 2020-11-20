const mongoose = require('mongoose');
const farmeruploadSchema = new mongoose.Schema({

    productName: String,
    productDescription: String,
    productImage: String,
    price:String,
    productType: String,
    uploadDate: String,
    wardUF: String,
    paymentMode: String,
    delivery:String,
    status: String,
  });

  module.exports = mongoose.model('FarmerUpload', farmeruploadSchema);