const express = require('express');
const router = express.Router();
const LoginFO = require('../models/LoginFO');
const RegistrationUF = require('../models/RegistrationUF')

router.get('/loginFO', (req, res) => {
    res.render('foLogin');
  }); 

//SAVING LOGIN INFORMATION FOR FARMER ONE TO THE DATABASE
router.post('/loginFO', async(req, res) => {
  try{
    const loginFO = new LoginFO(req.body);
    await loginFO.save(()=>{
      console.log('save successful');
      res.redirect('/dashboardFO')
      })
    }catch(err){
    res.status(400).send('Ooops! Something went wrong!')
    console.log(err);
      }
  });


router.get('/registerUF', (req, res) => {
    res.render('registrationUF')
    });  

  //SAVING URBAN FARMER'S INFORMATION TO THE DATABASE
router.post('/registerUF', async(req, res) => {
    try{
    const registrationUF = new RegistrationUF(req.body);
    await registrationUF.save(()=>{
      console.log('save successful');
      res.redirect('/dashboardFO')
      })
    }catch(err){
      res.status(400).send('Ooops! Something went wrong!')
    console.log(err);
      }
    }); 


  //RETRIEVE URBAN FARMER'S DATA FROM THE DATABASE
  router.get('/dashboardFO', async(req, res)=>{
    try{
      let items = await RegistrationUF.find()
      //SEARCHING URBAN FARMER DATA FOR A SPECIFIC CATEGORY IN THE DATABASE say gender
      if(req.query.wardUF){
        items = await RegistrationUF.find({wardUF:req.query.wardUF})
      }
      res.render('dashboardFO', {ufarmers: items})
    }
    catch(err){
      res.status(400).send('Ooops! Couldnt find items in database!')
    }
  })

  //DELETING AN URBAN FARMER FROM THE DATABASE
  router.post('/deleteUF', async(req, res)=>{
    try{
      await RegistrationUF.deleteOne({_id:req.body.id})
      res.redirect('back')
    }catch(err){
      res.status(400).send('Oooops! Cant delete item!')
    }
    
  })

  //UPDATING URBAN FARMER INFORMATION IN THE DATABASE
//Load the update form for a selected urban farmer with a given id
router.get('/update/:id', async (req, res) => {
  try {
      const updateUF = await RegistrationUF.findOne({ _id:req.params.id })
      res.render('updateFOdash', { ufarmer: updateUF })
  } catch (err) {
      res.status(400).send("Unable to find item in the database");
  }
})
//Post the updated urban farmer data back to the database 
//and show the update on dashboard of FO
router.post('/update', async (req, res) => {
  try {
      await RegistrationUF.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('/dashboardFO');
  } catch (err) {
      res.status(404).send("Oooops! Update Failed. Try again");
  }    
})

module.exports = router;