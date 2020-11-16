const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/loginAO', (req, res) => {
    res.render('agricLogin');
  }); 

//SAVING LOGIN INFORMATION FOR AGRICULTURAL OFFICER TO THE DATABASE

router.post('/loginAO', passport.authenticate('local'), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/dashboardAO');
})

module.exports = router;