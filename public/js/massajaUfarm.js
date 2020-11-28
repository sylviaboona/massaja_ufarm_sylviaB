// //VALIDATION FUNCTION FOR AGRIC OFFICER REGISTRATION FORM
const registerAOform = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const form = document.agricOfficerForm;
  const firstName = form.firstNameAO;
  const lastName = form.lastNameAO;
  const userName = form.username;
  const password = form.password;
  const phoneNumber = form.phoneNumberAO;
  const ward = form.ward;

  //Validate First Name.
  let fnameRegex = /^[A-Za-z]{5,50}$/;
  let fnameAOerr = document.getElementById("fnameUFerr");
  if (fnameRegex.test(firstName.value) == false) {
    fnameAOerr.innerHTML = "* First Name is required";
    fnameAOerr.style.color = "red";
    firstName.style.border = "2px solid red";
    return false;
  } 

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]{5,50}$/;
  let lnameAOerr = document.getElementById("lnameUFerr");
  if (lnameRegex.test(lastName.value) == false) {
    lnameAOerr.innerHTML = "* Last Name is required";
    lnameAOerr.style.color = "red";
    lastName.style.border = "2px solid red";
    return false;
  } 

  //Validate Agric Officer User Name, must be only lower case letters
  let unameRegex = /^[a-z]+$/;
  let unameAOerr = document.getElementById("unameUFerr");
  if (unameRegex.test(userName.value) == false) {
    unameAOerr.innerHTML = "* User Name is required";
    unameAOerr.style.color = "red";
    userName.style.border = "2px solid red";
    return false;
  } 

  //Validate AO password
  let pwdRegex = /^[A-Z][0-9]{5}$/;
  let pwdErr = document.getElementById("foNumErr");
  if (pwdRegex.test( password.value) == false) {
    pwdErr.innerHTML = "* Unique FO Number is required";
    pwdErr.style.color = "red";
    password.style.border = "2px solid red";
    return false;
  } 

  //Validate AO Phone number, should be 10 digits
  let phoneRegex2 = /^[0-9]{10}$/;
  let aophoneNumErr2 = document.getElementById("ufphoneNumErr2");
  if (phoneRegex2.test(phoneNumber.value) == false) {
    aophoneNumErr2.innerHTML = "* Phone Number 2 is required";
    uaophoneNumErr2.style.color = "red";
    phoneNumber.style.border = "2px solid red";
    return false;
  } 

  //Validate Ward - a ward must be selected
  let wardAOErr = document.getElementById("wardAOErr");
  if (ward.value == "Default") {
    wardAOErr.innerHTML = "*Please select a ward";
    wardAOErr.style.color = "red";
    ward.style.border = "2px solid red";
    return false;
  } 
  let anchor = document.getElementById("registerAgricOfficer");
  let regbutton = anchor.getElementsByTagName("input")[0];
  regbutton.disabled = true;
  form.requestSubmit();
};

//VALIDATION FUNCTION FOR FARMER ONE REGISTRATION FORM
const registerFOform = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const form = document.foRegisterForm;
  const firstName = form.firstNameFO;
  const lastName = form.lastNameFO;
  const userName = form.username;
  const dob = form.dobFO;
  const dor = document.getElementById("inputDOR");
  const foNumber = form.password;
  const foNIN = form.foNIN;
  const phoneNumber = form.phoneNumberFO;
  const ward = form.ward;
  const stayPeriod = form.stayPeriod;
  const residenceType = form.residenceType;
  const horticulture = document.getElementById("horticultureProduce");
  const poultry = document.getElementById("poultryProducts");
  const diary = document.getElementById("diaryProducts");

  //Validate First Name.
  let fnameRegex = /^[A-Za-z]{5,50}$/;
  let fnameFOerr = document.getElementById("fnameFOerr");
  if (fnameRegex.test(firstName.value) == false) {
    fnameFOerr.innerHTML = "* First Name is required";
    fnameFOerr.style.color = "red";
    firstName.style.border = "2px solid red";
    return false;
  } 

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]{5,50}$/;
  let lnameFOerr = document.getElementById("lnameFOerr");
  if (lnameRegex.test(lastName.value) == false) {
    lnameFOerr.innerHTML = "* Last Name is required";
    lnameFOerr.style.color = "red";
    lastName.style.border = "2px solid red";
    return false;
  } 

  //Validate User Name.
  let unameRegex = /^[a-z]+$/;
  let unameFOerr = document.getElementById("unameFOerr");
  if (unameRegex.test(userName.value) == false) {
    unameFOerr.innerHTML = "* User Name is required";
    unameFOerr.style.color = "red";
    userName.style.border = "2px solid red";
    return false;
  } 

  //Validate Date of Birth
  let dobFOerr = document.getElementById("dobFOerr");
  if (dob.value == "") {
    dobFOerr.innerHTML = "* Date of Birth is required";
    dobFOerr.style.color = "red";
    dob.style.border = "2px solid red";
    return false;
  } 

  //Validate Date of Registration of Farmer One
  let dorFOerr = document.getElementById("dorFOerr");
  if (dor.value == "") {
    dorFOerr.innerHTML = "* Date of Registration is required";
    dorFOerr.style.color = "red";
    dor.style.border = "2px solid red";
    return false;
  } 

  //Validate Unique FO Number, should start with 3 Uppercase letters followed by 2 numbers
  let foNumRegex = /^[A-Z]{3}[0-9]{3}$/;
  let foNumErr = document.getElementById("foNumErr");
  if (foNumRegex.test(foNumber.value) == false) {
    foNumErr.innerHTML = "* Unique FO Number is required";
    foNumErr.style.color = "red";
    foNumber.style.border = "2px solid red";
    return false;
  } 

  //Validate FO NIN Number
  let foNINRegex = /^[A-Z]{2}[0-9]{7}[A-Z]{1}[0-9]{2}[A-Z]{1}$/;
  let foNINerr = document.getElementById("foNINerr");
  if (foNINRegex.test( foNIN.value) == false) {
    foNINerr.innerHTML = "* NIN is required";
    foNINerr.style.color = "red";
    foNIN.style.border = "2px solid red";
    return false;
  } 

  //Validate Farmer One Phone number
  let phoneRegex = /^[0-9]{10}$/;
  let fophoneNumErr = document.getElementById("fophoneNumErr");
  if (phoneRegex.test(phoneNumber.value) == false) {
    fophoneNumErr.innerHTML = "* Phone Number is required";
    fophoneNumErr.style.color = "red";
    phoneNumber.style.border = "2px solid red";
    return false;
  } 

  //Validate Ward - a ward must be selected
  let wardErr = document.getElementById("wardErr");
  if (ward.value == "Default") {
    wardErr.innerHTML = "*Please select a ward";
    wardErr.style.color = "red";
    ward.style.border = "2px solid red";
    return false;
  } 

  //Validate Period of Stay in Ward for Farmer One, must be more than 10 years
  let stayPeriodErr = document.getElementById("stayPeriodErr");
  let date = new Date(stayPeriod.value),
    stayYear = date.getFullYear(),
    currentYear = new Date().getFullYear();
  if (stayPeriod.value == "" || currentYear - stayYear < 10) {
    stayPeriodErr .innerHTML = "* Must be over 10 years";
    stayPeriodErr .style.color = "red";
    stayPeriod.style.border = "2px solid red";
    return false;
  } 

  // let stayPeriodErr = document.getElementById("stayPeriodErr");
  // if (stayPeriod.value == "Default") {
  //   stayPeriodErr.innerHTML = "*Select Stay Period In ward";
  //   stayPeriodErr.style.color = "red";
  //   stayPeriod.style.border = "2px solid red";
  //   return false;
  // } else {
  //   stayPeriod.style.border = "2px solid green";
  // }

  //Validate Farmer One Residence Type
  let residenceErr = document.getElementById("residenceErr");
  if (residenceType.value == "Default") {
    residenceErr.innerHTML = "*Select your residence type";
    residenceErr.style.color = "red";
    residenceType.style.border = "2px solid red";
    return false;
  } 

  //Validate Farmer One Produce Type, at least one item should be checked
  if (
    horticulture.checked == false &&
    poultry.checked == false &&
    diary.checked == false
  ) {
    produceFOerr.innerHTML = "*Select produce type";
    produceFOerr.style.color = "red";
    return false;
  } 
  // else {
  //   let parent = horticulture.parentNode.parentNode;
  //   parent.style.border = "2px solid green";
  // }
  let anchor = document.getElementById("registerFarmerOne");
  let regbutton = anchor.getElementsByTagName("input")[0];
  regbutton.disabled = true;
  form.requestSubmit();
};

//VALIDATION FUNCTION FOR URBAN FARMER REGISTRATION FORM
const registerUFform = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const form = document.urbanFarmerForm;
  const firstName = form.firstNameUF;
  const lastName = form.lastNameUF;
  const userName = form.username;
  const dob = form.dobUF;
  const idNumber = form.password;
  const ufNIN = form.ufNIN;
  const phoneNumber = form.phoneNumberUF;
  const phoneNumber2 = form.phoneNumberUF2;
  const dor = document.getElementById("inputDOR");
  const horticulture = document.getElementById("horticultureProduce");
  const poultry = document.getElementById("poultryProducts");
  const diary = document.getElementById("diaryProducts");

  //Validate First Name.
  let fnameRegex = /^[A-Za-z]{2,50}$/;
  let fnameUFerr = document.getElementById("fnameUFerr");
  if (fnameRegex.test(firstName.value) == false) {
    fnameUFerr.innerHTML = "* First Name is required";
    fnameUFerr.style.color = "red";
    firstName.style.border = "2px solid red";
    return false;
  } 

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]\w{2,50}$/;
  //  /^[A-Za-z]+$/;
  let lnameUFerr = document.getElementById("lnameUFerr");
  if (lnameRegex.test(lastName.value) == false) {
    lnameUFerr.innerHTML = "* Last Name is required";
    lnameUFerr.style.color = "red";
    lastName.style.border = "2px solid red";
    return false;
  } else {
    lastName.style.border = "2px solid green";
  }

  //Validate Urban Farmer User Name.
  let unameRegex = /^[a-z]+$/;
  let unameUFerr = document.getElementById("unameUFerr");
  if (unameRegex.test(userName.value) == false) {
    unameUFerr.innerHTML = "* User Name is required";
    unameUFerr.style.color = "red";
    userName.style.border = "2px solid red";
    return false;
  } 

  // //Validate Urban Farmer Date of Birth, Date input must be filled
  let dobUFerr = document.getElementById("dobUFerr");
  let date = new Date(dob.value),
    birthYear = date.getFullYear(),
    currentYear = new Date().getFullYear();
  if (dob.value == "" || currentYear - birthYear < 10) {
    dobUFerr.innerHTML = "* Enter Date of Birth";
    dobUFerr.style.color = "red";
    dob.style.border = "2px solid red";
    return false;
  } 

  // //Validate Date of Registration
  let dorUFerr = document.getElementById("dorUFerr");
  if (dor.value == "") {
    dorUFerr.innerHTML = "* Enter Date of Registration";
    dorUFerr.style.color = "red";
    dor.style.border = "2px solid red";
    return false;
  } 

  //Validate Unique ID Number
  let idNumRegex = /^[0-9]{3}$/;
  let idNumErr = document.getElementById("idNumErr");
  if (idNumRegex.test(idNumber.value) == false) {
    idNumErr.innerHTML = "* Enter valid id Number";
    idNumErr.style.color = "red";
    idNumber.style.border = "2px solid red";
    return false;
  } 

  //Validate FO NIN Number
  let ufNINRegex = /^[A-Z]{2}[0-9]{7}[A-Z]{1}[0-9]{2}[A-Z]{1}$/;
  let ufNINerr = document.getElementById("ufNINerr");
  if (ufNINRegex.test(ufNIN.value) == false) {
    ufNINerr.innerHTML = "* Enter valid NIN";
    ufNINerr.style.color = "red";
    ufNIN.style.border = "2px solid red";
    return false;
  } 

  //Validate Phone number 1
  let phoneRegex = /^[0-9]{10}$/;
  let ufphoneNumErr1 = document.getElementById("ufphoneNumErr1");
  if (phoneRegex.test(phoneNumber.value) == false) {
    ufphoneNumErr1.innerHTML = "* Phone Number is required";
    ufphoneNumErr1.style.color = "red";
    phoneNumber.style.border = "2px solid red";
    return false;
  } 

  //Validate Phone number 2
  let phoneRegex2 = /^[0-9]{10}$/;
  let ufphoneNumErr2 = document.getElementById("ufphoneNumErr2");
  if (phoneRegex2.test(phoneNumber2.value) == false) {
    ufphoneNumErr2.innerHTML = "* Other Contact is required";
    ufphoneNumErr2.style.color = "red";
    phoneNumber2.style.border = "2px solid red";
    return false;
  } 

  //Validate Urban Farmer Produce Type
  let produceUFerr = document.getElementById("produceUFerr");
  if (
    horticulture.checked == false &&
    poultry.checked == false &&
    diary.checked == false
  ) {
    produceUFerr.innerHTML = "*Select produce type";
    produceUFerr.style.color = "red";
    return false;
  } 
  // else {
  //   let parent = horticulture.parentNode.parentNode;
  //   parent.style.border = "2px solid green";
  // }
  let anchor = document.getElementById("registerUF");
  let regbutton = anchor.getElementsByTagName("input")[0];
  regbutton.disabled = true;
  form.requestSubmit();
};

//VALIDATE PRODUCT UPLOAD FORM FOR URBAN FARMER
const validateUpload = () => {
  const productName = document.uploadForm.productName;
  const productDescription = document.uploadForm.productDescription;
  const uploadDate = document.uploadForm.uploadDate;
  const price = document.uploadForm.price;

  //Validate First Name.
  let productNameRegex = /^[A-Za-z]{2,50}$/;
  let productnameErr = document.getElementById("productnameErr");
  if (productNameRegex.test(productName.value) == false) {
    productnameErr.innerHTML = "* First Name is required";
    productnameErr.style.color = "red";
    productName.style.border = "2px solid red";
    return false;
  } 

  //Validate Product Description, should not be more than 50 characters
  let descRegex = /^[A-Za-z ]{5,50}$/;
  let descErr = document.getElementById("descErr");
  if (descRegex.test(productDescription.value) == false) {
    descErr.innerHTML = "* Last Name is required";
    descErr.style.color = "red";
    productDescription.style.border = "2px solid red";
    return false;
  } 

  //Validate Upload Date
  let uploadDateErr = document.getElementById("uploadDateErr");
  if (uploadDate.value == "") {
    uploadDateErr.innerHTML = "* Enter Date of Upload";
    uploadDateErr.style.color = "red";
    uploadDate.style.border = "2px solid red";
    return false;
  } else {
    uploadDate.style.border = "2px solid green";
  }

  //Validate price
  let priceRegex = /^[0-9]+$/;
  let priceErr = document.getElementById("priceErr");
  if (priceRegex.test(price.value) == false) {
    priceErr.innerHTML = "* Price is required";
    priceErr.style.color = "red";
    price.style.border = "2px solid red";
    return false;
  } 
};
if (document.getElementById("registerUF")) {
  let anchor = document.getElementById("registerUF");
  anchor.addEventListener("click", registerUFform);
}
if (document.getElementById("registerFarmerOne")) {
  let anchor = document.getElementById("registerFarmerOne");
  anchor.addEventListener("click", registerFOform);
}
if (document.getElementById("registerAgricOfficer")) {
  let anchor = document.getElementById("registerAgricOfficer");
  anchor.addEventListener("click", registerAOform);
}

// const orderbtn = () =>{
//   let quantity = document.uploadForm.quantity;
//   if(quantity <= 5){
//     let anchor = document.getElementById('orderBTN');
//     let orderBTN = anchor.getElementsByTagName('input')[0]
//     orderBTN.disabled = true;
//   }
// }
