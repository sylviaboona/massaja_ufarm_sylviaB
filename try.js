const fileFilter = (req, file, callback) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
      callback(null, true);
    } else {
      callback(null, false);
    }
  };
  
  const upload = multer({ storage, fileFilter });
  


  /// LOGIC FOR DECLARING A PRODUCT NOT AVAILABLE

  let quantity = document.uploadform.quantity;
  if(quantity <= 0){
    let anchor = document.getElementById('orderBTN');
    anchor.disabled = true;
  }