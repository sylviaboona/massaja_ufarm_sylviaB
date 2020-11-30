const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    productName: String,
    price:String,
    paymentMode: String,
    delivery:String,
    customerContact: String,
    quantity:{type: Number, default: 1 }
  });

  module.exports = mongoose.model('Order', orderSchema);