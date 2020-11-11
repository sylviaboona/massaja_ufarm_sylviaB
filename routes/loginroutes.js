const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/loginFO', (req, res) => {
    res.render('foLogin');
  }); 

//PROCESS THE LOG IN INFORMATION FOR FARMER ONE SUBMITTED
router.post('/loginFO', passport.authenticate('local'), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/dashboardAO');
})

module.exports = router;