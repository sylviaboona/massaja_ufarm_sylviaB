const express = require("express");
const router = express.Router();
const multer = require("multer");
const FarmerUpload = require("../models/FarmerUpload");

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

//
const upload = multer({ storage: storage }).single("productImage");

router.get("/farmerUpload", (req, res) => {
  res.render("farmerUpload");
});

//SAVING URBAN FARMER'S UPLOADED PRODUCE TO THE DATABASE
router.post("/farmerUpload", upload, async (req, res) => {
  try {
    req.body.status = "Pending";
    const farmeruploads = new FarmerUpload(req.body);
    farmeruploads.productImage = req.file.filename;
    console.log(req.body);
    await farmeruploads.save(() => {
      res.redirect("/dashboardUF");
    });
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong!");
    console.log(err);
  }
});

//RETRIEVE URBAN FARMER'S UPLOADED PRODUCE FROM THE DATABASE
router.get("/dashboardUF", async (req, res) => {
  try {
    let items = await FarmerUpload.find();
    //SEARCHING URBAN FARMER PRODUCE FOR A SPECIFIC CATEGORY IN THE DATABASE say gender
    if (req.query.productName) {
      items = await FarmerUpload.find({ name: req.query.productName });
    }
    res.render("dashboardUF", { users: items });
  } catch (err) {
    res.status(400).send("Ooops! Couldnt find items in database!");
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
    res.redirect("/loginFO");
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
    res.redirect("/loginFO");
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
