const express = require('express');
const router = express.Router();
const passport = require('passport');
//How do I import roles


//REnders the login page for AO
router.get('/login', (req, res) => {
    res.render('login');
  }); 

//PROCESS THE LOG IN INFORMATION FOR FARMER ONE SUBMITTED
router.post('/login', passport.authenticate('local'), (req,res) =>{
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


// router.post('/loginFO', passport.authenticate('local', {failureRedirect: '/loginFO'}), (req,res) =>{
//   req.session.user = req.user;
//   const userRole = roles[req.user.role]
  
//   if(userRole == 'AgricOfficer')
//       {
//        res.redirect('/dashboardAO');
//       }
//   if(userRole == 'FarmerOne')
//       {
//        res.redirect('/dashboardFO/:ward');
//       }
//   else(userRole == 'UrbanFarmer')
//       {
//       res.redirect('/dashboardUF');
//   }
// })

//we r checking user asign them a session, then we pick the role of this user to check it before they can be redirected to their page
// router.post('/login_ao', passport.authenticate('local', {failureRedirect:'/login_ao'}), (req,res) =>{
//     req.session.user = req.user;
//     const userRole = req.user.userRole
//     if(userRole === 'agric officer'){
//         res.redirect('/aolist');
//     }
    
// })
//input(type=text name=role value=urbanfarmer) role


module.exports = router;