const express = require('express');
const { deleteOne } = require("../models/LoginAO");
const router = express.Router();
const LoginAO = require('../models/LoginAO');
const RegistrationFO = require('../models/RegistrationFO')

router.get('/loginAO', (req, res) => {
    res.render('agricLogin');
  }); 

//SAVING LOGIN INFORMATION FOR AGRICULTURAL OFFICER TO THE DATABASE
router.post('/loginAO', async(req, res) => {
  try{
    const loginAO = new LoginAO(req.body);
    await loginAO.save(()=>{
      console.log('save successful');
      res.redirect('/dashboardAO')
      })
    }catch(err){
    res.status(400).send('Ooops! Something went wrong!')
    console.log(err);
      }
  });


router.get('/registerFO', (req, res) => {
    res.render('registrationFO')
    }); 
router.get('/dashboardAO', (req, res) => {
  res.render('dashboardAO')
  }); 

router.post('/registerFO', async(req, res) => {
    try{
    const registrationFO = new RegistrationFO(req.body);
    await registrationFO.save(()=>{
      console.log('save successful');
      res.redirect('/dashboardAO')
      })
    }catch(err){
      res.status(400).send('Ooops! Something went wrong!')
    console.log(err);
      }
    }); 



  router.get('/', async(req, res) => {
    try{
      let items = await RegistrationFO.find()
      //SEARCHING ITEMS WITH A SPECIFIC FIELD IN THE DATABASE
      if(req.query.name){
        items = await RegistrationFO.find({name:req.query.name})
      }
      res.render('dashboardAO', {title:'Farmer One list', users: items})
    }
    catch(err){
      res.status(400).send('Ooops! Couldnt find items in database!')
    }
    }); 

router.post('/registerFO', (req, res) => {
      console.log(req.body);
      res.redirect('/welcome');
  });

module.exports = router;