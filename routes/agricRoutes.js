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

  //SAVING FARMER ONE DATA TO THE DATABASE
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


  //RETRIEVE FARMER ONE DATA FROM THE DATABASE
  router.get('/dashboardAO', async(req, res)=>{
    try{
      let items = await RegistrationFO.find()
      //SEARCHING FARMER ONE ITEMS FOR A SPECIFIC FIELD IN THE DATABASE
      if(req.query.gender){
        items = await RegistrationFO.find({name:req.query.gender})
      }
      res.render('dashboardAO', {users: items})
    }
    catch(err){
      res.status(400).send('Ooops! Couldnt find items in database!')
    }
  })

  //DELETING A FARMER ONE FROM THE DATABASE
  router.post('/delete', async(req, res)=>{
    try{
      await RegistrationFO.deleteOne({_id:req.body.id})
      res.redirect('back')
    }catch(err){
      res.status(400).send('Oooops! Cant delete item!')
    }
    
  })

module.exports = router;