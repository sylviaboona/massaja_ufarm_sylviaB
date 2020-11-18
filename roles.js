var roles = {
    admin: 'AgricOfficer',
    farmerone:'FarmerOne',
    urbanfarmer:'UrbanFarmer'
}
module.exports = roles;


// Multer Middleware Settings
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
  const upload = multer({ storage: storage}).single('image');
