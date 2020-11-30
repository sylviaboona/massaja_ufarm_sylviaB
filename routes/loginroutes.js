const express = require('express');
const router = express.Router();
const passport = require('passport');
//How do I import roles


//REnders the login page for AO
router.get('/login', (req, res) => {
    res.render('login');
  }); 

//PROCESS THE LOG IN INFORMATION SUBMITTED
//Checking a user and asigning them a session, 
//Then pick the role of this user to check it and redirect to their respective page
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
  req.session.user = req.user;
  const userRole = req.user.role;
  if (userRole=='AgricOfficer'){
    res.redirect('/dashboardAO');
  }
  else if (userRole=='FarmerOne'){
    
    res.redirect('/dashboardFO');
  }
  else if (userRole=='UrbanFarmer'){
    res.redirect('/dashboardUF');
  }
})



// router.post('/login_ao', passport.authenticate('local', {failureRedirect:'/login_ao'}), (req,res) =>{
//     req.session.user = req.user;
//     const userRole = req.user.userRole
//     if(userRole === 'agric officer'){
//         res.redirect('/aolist');
//     }
    
// })
//input(type=text name=role value=urbanfarmer) role


module.exports = router;