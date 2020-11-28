const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/Order')
const FarmerUpload = require('../models/FarmerUpload')


router.get('/orderForm', async(req, res)=>{
    const productId = req.query.id;
    res.render('orderForm', {productId})
});


router.post('/orderForm', async(req, res)=>{
    try{
        const clientOrders = await Order(req.body);
        const product = await FarmerUpload.findOne({_id: req.query.id});
        let diff = parseInt(product.quantity)- parseInt(req.body.quantity);
        let updatedQuantity = {};
        if(diff == 0){
            updatedQuantity.quantity = 'N/A'
        } else{
            updatedQuantity.quantity = diff;
        }
        
        await FarmerUpload.findOneAndUpdate({_id: req.query.id}, updatedQuantity);
        res.redirect("/ordersDash");
        // await clientOrders.save(() => {
        //     res.redirect("/ordersDash")
        // });
    } catch (err) {
    res.status(400).send("Ooops! Something went wrong!");
    console.log(err);
  }
});
// const FarmerUpload.find({status approved}) //Check first if the product is available
    // Then check in erUpload to make sure there is an error if a given requsted

//     const order = new Order({
//         _id:mongoose.Types.ObjectId(),
//         quantity: req.body.quantity,
//         product: productId
// })

router.get('/ordersDash', async(req, res)=>{
    try{
        let orders = await Order.find();
        res.render('orderDash', {items: orders})
    } catch (err) {
        res.status(400).send("Ooops! Couldnt find items in database!");
      } 
});

module.exports = router;