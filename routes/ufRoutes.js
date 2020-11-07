const express = require('express');
const { deleteOne } = require("../models/LoginUF");
const router = express.Router();
const LoginUF = require('../models/LoginUF');
const FarmerUpload = require('../models/FarmerUpload')

router.get('/loginUF', (req, res) => {
    res.render('ufLogin');
  }); 

//SAVING LOGIN INFORMATION FOR URBAM FARMERS TO THE DATABASE
router.post('/loginUF', async(req, res) => {
  try{
    const loginUF = new LoginUF(req.body);
    await loginUF.save(()=>{
      console.log('save successful');
      res.redirect('/farmerUpload')
      })
    }catch(err){
    res.status(400).send('Ooops! Something went wrong!')
    console.log(err);
      }
  });


router.get('/farmerUpload', (req, res) => {
    res.render('farmerUpload')
    });  

  //SAVING URBAN FARMER'S UPLOADED PRODUCE TO THE DATABASE
router.post('/farmerUpload', async(req, res) => {
    try{
    const farmerupload = new FarmerUpload(req.body);
    await farmerupload.save(()=>{
      console.log('save successful');
      res.redirect('/dashboardUF')
      })
    }catch(err){
      res.status(400).send('Ooops! Something went wrong!')
    console.log(err);
      }
    }); 


  //RETRIEVE URBAN FARMER'S UPLOADED PRODUCE FROM THE DATABASE
  router.get('/dashboardUF', async(req, res)=>{
    try{
      let items = await FarmerUpload.find()
      //SEARCHING URBAN FARMER PRODUCE FOR A SPECIFIC CATEGORY IN THE DATABASE say gender
      if(req.query.gender){
        items = await FarmerUpload.find({name:req.query.gender})
      }
      res.render('dashboardUF', {users: items})
    }
    catch(err){
      res.status(400).send('Ooops! Couldnt find items in database!')
    }
  })

  //DELETING AN URBAN FARMER'S PRODUCT FROM THE DATABASE
  router.post('/deleteProduct', async(req, res)=>{
    try{
      await FarmerUpload.deleteOne({_id:req.body.id})
      res.redirect('back')
    }catch(err){
      res.status(400).send('Oooops! Cant delete item!')
    }
    
  })

module.exports = router;