//VALIDATION FUNCTION FOR AGRIC OFFICER LOGIN FORM
var loginAOform =()=>{
  const emailAO = document.agricLogin.emailAO
  const password = document.agricLogin.pwdAO
 
  //Validate AO  email address
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailError = document.getElementById('emailAOerr');
  if(emailRegex.test(emailAO.value) == false){
    emailError.innerHTML='* Email is required'
    emailError.style.color = 'maroon'
    emailAO.style.border = '2px solid red' 
  }else{
    emailAO.style.border = '2px solid green'
  }

  let passWordRegex = /^\w{7,12}$/;
  let pwdAOErr = document.getElementById('pwdAOerr')
  if(!password.value.match(passWordRegex)){
    pwdAOErr.innerHTML='* Password is required'
    pwdAOErr.style.color = 'maroon'
    password.style.border = '2px solid red';
  }else{
    password.style.border = '2px solid green';
  }

}

//VALIDATION FUNCTION FOR FARMER ONE REGISTRATION FORM
const registerFOform = () => {
  const firstName = document.foRegisterForm.firstNameFO;
  const lastName = document.foRegisterForm.lastNameFO;
  const userName = document.foRegisterForm.userNameFO;
  const dob = document.foRegisterForm.dobFO;
  const dor = document.getElementById("inputDOR");
  const foNumber = document.foRegisterForm.foNumber;
  const foNIN = document.foRegisterForm.foNIN;
  const phoneNumber = document.foRegisterForm.phoneNumberFO;
  const ward = document.foRegisterForm.ward;
  const stayPeriod = document.foRegisterForm.stayPeriod;
  const residenceType = document.foRegisterForm.residenceType;
  const horticulture = document.getElementById("horticultureProduce");
  const poultry = document.getElementById("poultryProducts");
  const diary = document.getElementById("diaryProducts");

  //emailError.innerHTML='* Email is required'
  //emailError.style.color = 'maroon'
  
  //Validate First Name.
  let fnameRegex = /^[A-Za-z]+$/;
  let fnameFOerr = document.getElementById('fnameFOerr') 
  if (fnameRegex.test(firstName.value) == false) {
    fnameFOerr.innerHTML = '* First Name is required'
    fnameFOerr.style.color = 'red'
    firstName.style.border = "2px solid red";
    return false
  } else {
    firstName.style.border = "2px solid green";
  }

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]+$/;
  let lnameFOerr = document.getElementById('lnameFOerr')
  if (lnameRegex.test(lastName.value) == false) {
    lnameFOerr.innerHTML = '* Last Name is required'
    lnameFOerr.style.color = 'red'
    lastName.style.border = "2px solid red";
  } else {
    lastName.style.border = "2px solid green";
  }

  //Validate User Name.
  let unameRegex = /^[A-Za-z]+$/;
  let unameFOerr = document.getElementById('unameFOerr')
  if (unameRegex.test(userName.value) == false) {
    unameFOerr.innerHTML = '* User Name is required'
    unameFOerr.style.color = 'red'
    userName.style.border = "2px solid red";
  } else {
    userName.style.border = "2px solid green";
  }

  //Validate Date of Birth
  let dobRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  let dobFOerr = document.getElementById('dobFOerr')
  if (!dob.value.match(dobRegex)) {
    dobFOerr.innerHTML = '* Date of Birth is required'
    dobFOerr.style.color = 'red'
    dob.style.border = "2px solid red";
  } else {
    dob.style.border = "2px solid green";
  }
  //Validate Date of Registration
  let dorRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  let dorFOerr = document.getElementById('dorFOerr')
  if (!dor.value.match(dorRegex)) {
    dorFOerr.innerHTML = '* Date of Registration is required'
    dorFOerr.style.color = 'red'
    dor.style.border = "2px solid red";
  } else {
    dor.style.border = "2px solid green";
  }

  //Validate Unique FO Number
  let foNumRegex = /[0-9]$/;
  ///^[A-Z]\w{3,4}$/;
  let foNumErr = document.getElementById('foNumErr')
  if (!foNumber.value.match(foNumRegex)) {
    foNumErr.innerHTML = '* Unique FO Number is required'
    foNumErr.style.color = 'red'
    foNumber.style.border = "2px solid red";
  } else {
    foNumber.style.border = "2px solid green";
  }

  //Validate FO NIN Number
  let foNINRegex =  /^[A-Z]\w{5,12}$/;
  // /^\w{13}$/
  // /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
  let foNINerr = document.getElementById('foNINerr')
  if (!foNIN.value.match(foNINRegex)) {
    foNINerr.innerHTML = '* NIN is required'
    foNINerr.style.color = 'red'
    foNIN.style.border = "2px solid red";
  } else {
    foNIN.style.border = "2px solid green";
  }

  //Validate Phone number
  let phoneRegex = /^[0-9]+$/;
  let fophoneNumErr = document.getElementById('fophoneNumErr')
  if (!phoneNumber.value.match(phoneRegex)) {
    fophoneNumErr.innerHTML = '* Phone Number is required'
    fophoneNumErr.style.color = 'red'
    phoneNumber.style.border = "2px solid red";
  } else {
    phoneNumber.style.border = "2px solid green";
  }

  //Validate Ward - a ward must be selected
  let wardErr = document.getElementById('wardErr')
  if (ward.value == "Default") {
    wardErr.innerHTML = '*Please select a ward'
    wardErr.style.color = 'red'
    // alert('please select a ward')
    ward.style.border = "2px solid red";
  } else {
    ward.style.border = "2px solid green";
  }

  //Validate Period of Stay in Ward
  // let x = ward.value;
  let stayPeriodErr = document.getElementById('stayPeriodErr')
  if (stayPeriod.value == "Default") {
    stayPeriodErr.innerHTML = '*Enter Stay Period In ward'
    stayPeriodErr.style.color = 'red'
    
    stayPeriod.style.border = "2px solid red";
  } else {
    stayPeriod.style.border = "2px solid green";
  }

  //Validate Residence Type
  let residenceErr = document.getElementById('residenceErr')
  if (residenceType.value == "Default") {
    residenceErr.innerHTML = '*Select your residence type'
    residenceErr.style.color = 'red'
    residenceType.style.border = "2px solid red";
  } else {
    residenceType.style.border = "2px solid green";
  }
  //Validate Produce Type
  if (
    horticulture.checked == false &&
    poultry.checked == false &&
    diary.checked == false
  ) {
    alert("Please select your produce type");
  }
};

//VALIDATION FUNCTION FOR FARMER ONE LOGIN FORM
var fologinform =()=>{
  const unameFO = document.farmerOneLogin.usernameFO
  const foNumber = document.farmerOneLogin.pwdFO
 
  //Validate FO  username
  let unameRegex = /^\w{5,12}$/;
  const unameError = document.getElementById('unameFOerr');
  if(unameRegex.test(unameFO.value) == false){
    unameError.innerHTML='* Username is required'
    unameError.style.color = 'maroon'
    unameFO.style.border = '2px solid red' 
  }else{
    unameFO.style.border = '2px solid green'
  }

  let foNumRegex = /^[A-Z]\w{3,4}$/;
  let pwdAOErr = document.getElementById('pwdFOerr')
  if(!foNumber.value.match(foNumRegex)){
    pwdAOErr.innerHTML='* FO Number is required'
    pwdAOErr.style.color = 'maroon'
    foNumber.style.border = '2px solid red';
  }else{
    foNumber.style.border = '2px solid green';
  }
}

//VALIDATION FUNCTION FOR URBAN FARMER REGISTRATION FORM
const registerUFform = () => {
  const firstName = document.urbanFarmerForm.firstNameUF;
  const lastName = document.urbanFarmerForm.lastNameUF;
  const userName = document.urbanFarmerForm.userNameUF;
  const dob = document.urbanFarmerForm.dobUF;
  const dor = document.getElementById("inputDOR");
  const idNumber = document.urbanFarmerForm.idNumber;
  const ufNIN = document.urbanFarmerForm.ufNIN;
  const phoneNumber = document.urbanFarmerForm.phoneNumberUF;
  const phoneNumber2 = document.urbanFarmerForm.phoneNumberUF2;
  const ward = document.urbanFarmerForm.wardUF;
  const horticulture = document.getElementById("horticultureProduce");
  const poultry = document.getElementById("poultryProducts");
  const diary = document.getElementById("diaryProducts");

  //emailError.innerHTML='* Email is required'
  //emailError.style.color = 'maroon'
  
  //Validate First Name.
  let fnameRegex = /^[A-Za-z]+$/;
  let fnameUFerr = document.getElementById('fnameUFerr') 
  if (fnameRegex.test(firstName.value) == false) {
    fnameUFerr.innerHTML = '* First Name is required'
    fnameUFerr.style.color = 'red'
    firstName.style.border = "2px solid red";
    return false
  } else {
    firstName.style.border = "2px solid green";
  }

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]+$/;
  let lnameUFerr = document.getElementById('lnameUFerr')
  if (lnameRegex.test(lastName.value) == false) {
    lnameUFerr.innerHTML = '* Last Name is required'
    lnameUFerr.style.color = 'red'
    lastName.style.border = "2px solid red";
    return false;
  } else {
    lastName.style.border = "2px solid green";
  }


  //Validate Urban Farmer User Name.
  let unameRegex = /^[A-Za-z]+$/;
  let unameUFerr = document.getElementById('unameUFerr')
  if (unameRegex.test(userName.value) == false) {
    unameUFerr.innerHTML = '* User Name is required'
    unameUFerr.style.color = 'red'
    userName.style.border = "2px solid red";
    return false;
  } else {
    userName.style.border = "2px solid green";
  }

  //Validate Urban Farmer Date of Birth
  let dobRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  let dobUFerr = document.getElementById('dobUFerr')
  if (!dob.value.match(dobRegex)) {
    dobUFerr.innerHTML = '* Enter Date of Birth'
    dobUFerr.style.color = 'red'
    dob.style.border = "2px solid red";
  } else {
    dob.style.border = "2px solid green";
  }
  //Validate Date of Registration
  let dorRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  let dorUFerr = document.getElementById('dorUFerr')
  if (!dor.value.match(dorRegex)) {
    dorUFerr.innerHTML = '* Enter Date of Registration'
    dorUFerr.style.color = 'red'
    dor.style.border = "2px solid red";
  } else {
    dor.style.border = "2px solid green";
  }

  //Validate Unique FO Number
  let idNumRegex = /^[A-Z]\w{3,4}$/;
  let idNumErr = document.getElementById('idNumErr')
  if (!idNumber.value.match(idNumRegex)) {
    idNumErr.innerHTML = '* Enter valid id Number'
    idNumErr.style.color = 'red'
    idNumber.style.border = "2px solid red";
  } else {
    idNumber.style.border = "2px solid green";
  }

  //Validate FO NIN Number
  let ufNINRegex =  /^[A-Z]\w{5,12}$/;
  // /^\w{13}$/
  // /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
  let ufNINerr = document.getElementById('ufNINerr')
  if (!ufNIN.value.match(ufNINRegex)) {
    ufNINerr.innerHTML = '* Enter valid NIN'
    ufNINerr.style.color = 'red'
    ufNIN.style.border = "2px solid red";
  } else {
    ufNIN.style.border = "2px solid green";
  }

  //Validate Phone number 1
  let phoneRegex = /^[0-9]+$/;
  let ufphoneNumErr1 = document.getElementById('ufphoneNumErr1')
  if (!phoneNumber.value.match(phoneRegex)) {
    ufphoneNumErr1.innerHTML = '* Phone Number is required'
    ufphoneNumErr1.style.color = 'red'
    phoneNumber.style.border = "2px solid red";
  } else {
    phoneNumber.style.border = "2px solid green";
  }

  //Validate Phone number 2
  let phoneRegex2 = /^[0-9]+$/;
  let ufphoneNumErr2 = document.getElementById('ufphoneNumErr2')
  if (!phoneNumber.value.match(phoneRegex2)) {
    ufphoneNumErr2.innerHTML = '* Phone Number 2 is required'
    ufphoneNumErr2.style.color = 'red'
    phoneNumber.style.border = "2px solid red";
  } else {
    phoneNumber.style.border = "2px solid green";
  }

  //Validate Ward - a ward must be selected
  let wardUFErr = document.getElementById('wardUFErr')
  if (ward.value == "Default") {
    wardUFErr.innerHTML = '*Please select a ward'
    wardUFErr.style.color = 'red'
    // alert('please select a ward')
    ward.style.border = "2px solid red";
  } else {
    ward.style.border = "2px solid green";
  }

  //Validate Produce Type
  let produceUFerr = document.getElementById('produceUFerr')
  if (
    horticulture.checked == false &&
    poultry.checked == false &&
    diary.checked == false
  ) {
    produceUFerr.innerHTML = '*Select at least one your produce type'
    produceUFerr.style.color = 'red'
  }
};