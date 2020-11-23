const express = require("express");
const router = express.Router();
const RegistrationUF = require("../models/RegistrationUF");
const Users = require("../models/Users");

router.get("/registerUF", (req, res) => {
  res.render("registrationUF");
});

//SAVING URBAN FARMER'S INFORMATION TO THE DATABASE



router.post("/registerUF", async (req, res) => {
  if (req.session.user) {
  try {
    const findFarmerOne = await Users.findOne({username: req.session.user.username})
    req.body.role = "UrbanFarmer";
    req.body.ward = findFarmerOne.ward
    const items = new RegistrationUF(req.body);
    const loginDetails = new Users(req.body);
    items.save();
    await Users.register(loginDetails, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/dashboardFO");
    });
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong.");
    console.log(err);
  }
}else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});

//RETRIEVE URBAN FARMER'S DATA FROM THE DATABASE

router.get("/dashboardFO", async (req, res) => {
  if (req.session.user) {
    try {
      const farmerOne = await Users.findOne({username: req.session.user.username})
      let items = await RegistrationUF.find({ward:farmerOne.ward}); 
      if (req.query.ward) {
        items = await RegistrationUF.find({ ward: req.query.ward });
      }
      res.render("dashboardFO", {
        users: items,
        //currentUser: req.session.user,
      });
    } catch (err) {
      res.status(400).send("Unable to find items in the database");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});

// router.get('/dashboardFO', async(req, res)=>{
//   try{
//     let items = await RegistrationUF.find()
//     //SEARCHING URBAN FARMER DATA FOR A SPECIFIC CATEGORY IN THE DATABASE say gender
//     if(req.query.wardUF){
//       items = await RegistrationUF.find({wardUF:req.query.wardUF})
//     }
//     res.render('dashboardFO', {ufarmers: items})
//   }
//   catch(err){
//     res.status(400).send('Ooops! Couldnt find items in database!')
//   }
// })

//DELETING AN URBAN FARMER FROM THE DATABASE
router.post("/deleteUF", async (req, res) => {
  if (req.session.user) {
    try {
      await RegistrationUF.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("Oooops! Cant delete item!");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});

//UPDATING URBAN FARMER INFORMATION IN THE DATABASE
//Load the update form for a selected urban farmer with a given id
router.get("/updateUF/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateUF = await RegistrationUF.findOne({ _id: req.params.id });
      res.render("updateFOdash", { user: updateUF });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});
//Post the updated urban farmer data back to the database
//and show the update on dashboard of FO
router.post("/updateUF", async (req, res) => {
  if (req.session.user) {
    try {
      await RegistrationUF.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("/dashboardFO");
    } catch (err) {
      res.status(404).send("Oooops! Update Failed. Try again");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});



router.post("/logoutFO", (req, res) => {
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
