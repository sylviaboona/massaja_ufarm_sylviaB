const express = require("express");
const router = express.Router();
const multer = require("multer");
const FarmerUpload = require("../models/FarmerUpload");
const Users = require("../models/Users");
const RegistrationUF = require("../models/RegistrationUF");

//Defining the storage location for our images to upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

// Declaring a variable upload that defines where the images will be stored
const upload = multer({ storage: storage }).single("productImage");

router.get("/farmerUpload", (req, res) => {
  res.render("farmerUpload");
});

//SAVING URBAN FARMER'S UPLOADED PRODUCE TO THE DATABASE
router.post("/farmerUpload", upload, async (req, res) => {
  if (req.session.user) {
  try {
    const urbanfarmer = await Users.findOne({username: req.session.user.username})
    req.body.status = "Pending";
    req.body.ward = urbanfarmer.ward;
    const farmeruploads = new FarmerUpload(req.body);
    farmeruploads.productImage = req.file.filename;
    await farmeruploads.save(() => {
      res.redirect("/dashboardUF");
    });
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong!");
    console.log(err);
  }
} else {
  console.log("Can't find session");
  res.redirect("/login");
}
  
});

//RETRIEVE URBAN FARMER'S UPLOADED PRODUCE FROM THE DATABASE
router.get("/dashboardUF", async (req, res) => {
  if (req.session.user) {
  try {
    // const urbanfarmers = await Users.findOne({username: req.session.user.username})
    let farmerProducts = await FarmerUpload.find(); //{phoneContact:urbanfarmers.phoneNumberUF}
    //SEARCHING URBAN FARMER PRODUCE FOR A SPECIFIC PRODUCT
    if (req.query.productName) {
      farmerProducts = await FarmerUpload.find({ productName: req.query.productName });
    }
    res.render("dashboardUF", { items: farmerProducts });
  } catch (err) {
    res.status(400).send("Ooops! Couldnt find items in database!");
  }
} else {
  console.log("Can't find session");
  res.redirect("/login");
}
});

//DELETING AN URBAN FARMER'S PRODUCT FROM THE DATABASE
router.post("/deleteProduct", async (req, res) => {
  try {
    await FarmerUpload.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Oooops! Cant delete item!");
  }
});

//UPDATING URBAN FARMER INFORMATION IN THE DATABASE
//Load the update form for a selected urban farmer with a given id
router.get("/updateProduct/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateProduct = await FarmerUpload.findOne({ _id: req.params.id });
      res.render("updateProduct", { user: updateProduct });
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
router.post("/updateProduct", async (req, res) => {
  if (req.session.user) {
    try {
      await FarmerUpload.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("/dashboardUF");
    } catch (err) {
      res.status(404).send("Oooops! Update Failed. Try again");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});

//UPDATING URBAN FARMER INFORMATION IN THE DATABASE
//Load the update form for a selected urban farmer with a given id
router.get("/updateStatus/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateStatus = await FarmerUpload.findOne({ _id: req.params.id });
      res.render("statusUpdate", { user: updateStatus });
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
router.post("/updateStatus", async (req, res) => {
  if (req.session.user) {
    try {
      await FarmerUpload.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("/dashboardUF");
    } catch (err) {
      res.status(404).send("Oooops! Update Failed. Try again");
    }
  } else {
    console.log("Can't find session");
    res.redirect("/login");
  }
});


router.post("/logoutUF", (req, res) => {
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

// APPROVED PRODUCE BY FARMER ONE IS UPLOADED TO THE
router.get("/productDash", async (req, res) => {
  try {
    let approvedProducts = await FarmerUpload.find({ status: "Approved" });
    res.render("productDash", { items: approvedProducts });
  } catch (err) {
    res.status(400).send("Ooops! Couldnt find items in database!");
  }
});

module.exports = router;
