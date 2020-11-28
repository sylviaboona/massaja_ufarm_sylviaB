const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    product: {
      type: mongoose.Schema.Types.ObjectId, ref: 'FarmerUpload'
    },
    price:String,
    paymentMode: String,
    delivery:String,
    phoneContact: String,
    quantity:{type: Number, default: 1 }
  });

  module.exports = mongoose.model('Order', orderSchema);