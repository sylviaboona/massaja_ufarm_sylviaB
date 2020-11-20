const express = require("express");
const router = express.Router();
const RegistrationFO = require("../models/RegistrationFO");
const RegistrationAO = require("../models/RegistrationAO");
const Users = require("../models/Users");

router.get("/registerAO", (req, res) => {
  res.render("registrationAO");
});

//SAVING FARMER ONE DATA TO THE DATABASE
router.post("/registerAO", async (req, res) => {
  try {
    req.body.role = "AgricOfficer";
    const agricofficerInfo = new RegistrationAO(req.body);
    const loginDetails = new Users(req.body);
    agricofficerInfo.save();
    await Users.register(loginDetails, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/login");
    });
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong.");
    console.log(err);
  }
});

//GETTING THE FARMER ONE REGISTRATION
router.get("/registerFO", (req, res) => {
  res.render("registrationFO");
});

//SAVING FARMER ONE DATA TO THE DATABASE
router.post("/registerFO", async (req, res) => {
  try {
    req.body.role = "FarmerOne";
    const farmeroneInfo = new RegistrationFO(req.body);
    const loginDetails = new Users(req.body);
    farmeroneInfo.save();
    await Users.register(loginDetails, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/dashboardAO");
    });
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong.");
    console.log(err);
  }
});

// router.post('/registerFO', async(req, res) => {
//     try{
//     const registrationFO = new RegistrationFO(req.body);
//     await registrationFO.save(()=>{
//       console.log('save successful');
//       res.redirect('/dashboardAO')
//       })
//     }catch(err){
//       res.status(400).send('Ooops! Something went wrong!')
//     console.log(err);
//       }
//     });

//RETRIEVE FARMER ONE DATA FROM THE DATABASE

router.get("/dashboardAO", async (req, res) => {
  if (req.session.user) {
    try {
      let items = await RegistrationFO.find();
      if (req.query.ward) {
        items = await RegistrationFO.find({ ward: req.query.ward });
      }
      res.render("dashboardAO", {
        users: items,
        currentUser: req.session.user,
      });
    } catch (err) {
      res.status(400).send("Unable to find items in the database");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});

// router.get('/dashboardAO', async(req, res)=>{
//   try{
//     //Declaring a variable 'items' to contain data of all farmer ones
//     let items = await RegistrationFO.find()
//     //SEARCHING FOR FARMER ONES LIVING IN A SPECIFIC WARD
//     if(req.query.ward){
//       //assigning 'items' to return only farmer ones in a given ward searched by the user
//       items = await RegistrationFO.find({ward:req.query.ward})
//     }
//     res.render('dashboardAO', {users: items})
//   }
//   catch(err){
//     res.status(400).send('Ooops! Couldnt find items in database!')
//   }
// })

//DELETING A FARMER ONE FROM THE DATABASE
router.post("/delete", async (req, res) => {
  try {
    await RegistrationFO.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Oooops! Cant delete item!");
  }
});

//UPDATING FARMER ONE INFORMATION IN THE DATABASE
//Load the update form for a selected farmer one
router.get("/update/:id", async (req, res) => {
  try {
    const updateFO = await RegistrationFO.findOne({ _id: req.params.id });
    res.render("updateAOdash", { user: updateFO });
  } catch (err) {
    res.status(400).send("Unable to find item in the database");
  }
});
//Post the updated farmer one data back to the database
//and show the update on dashboard of AO
router.post("/update", async (req, res) => {
  try {
    await RegistrationFO.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/dashboardAO");
  } catch (err) {
    res.status(404).send("Oooops! Update Failed. Try again");
  }
});

router.post("/logoutAO", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        // failed to destroy session
      } else {
        return res.redirect("/login");
      }
    });
  }
});
module.exports = router;
