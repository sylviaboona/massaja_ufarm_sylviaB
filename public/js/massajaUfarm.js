// //VALIDATION FUNCTION FOR AGRIC OFFICER REGISTRATION FORM
const registerAOform = () => {
  const firstName = document.agricOfficerForm.firstNameAO;
  const lastName = document.agricOfficerForm.lastNameAO;
  const userName = document.agricOfficerForm.username;
  const password = document.agricOfficerForm.password;
  const phoneNumber = document.agricOfficerForm.phoneNumberAO;
  const ward = document.agricOfficerForm.ward;

  //Validate First Name.
  let fnameRegex = /^[A-Za-z]+$/;
  let fnameAOerr = document.getElementById("fnameUFerr");
  if (fnameRegex.test(firstName.value) == false) {
    fnameAOerr.innerHTML = "* First Name is required";
    fnameAOerr.style.color = "red";
    firstName.style.border = "2px solid red";
    return false;
  } else {
    firstName.style.border = "2px solid green";
  }

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]+$/;
  let lnameAOerr = document.getElementById("lnameUFerr");
  if (lnameRegex.test(lastName.value) == false) {
    lnameAOerr.innerHTML = "* Last Name is required";
    lnameAOerr.style.color = "red";
    lastName.style.border = "2px solid red";
    return false;
  } else {
    lastName.style.border = "2px solid green";
  }

  //Validate Agric Officer User Name, must be only lower case letters
  let unameRegex = /^[a-z]+$/;
  let unameAOerr = document.getElementById("unameUFerr");
  if (unameRegex.test(userName.value) == false) {
    unameAOerr.innerHTML = "* User Name is required";
    unameAOerr.style.color = "red";
    userName.style.border = "2px solid red";
    return false;
  } else {
    userName.style.border = "2px solid green";
  }

  //Validate AO password
  let pwdRegex = /^[0-9a-zA-Z]+$/;
  ///^[A-Z]\w{3,4}$/;
  let pwdErr = document.getElementById("foNumErr");
  if (!password.value.match(pwdRegex)) {
    pwdErr.innerHTML = "* Unique FO Number is required";
    pwdErr.style.color = "red";
    password.style.border = "2px solid red";
    return false;
  } else {
    password.style.border = "2px solid green";
  }

  //Validate AO Phone number, should be 10 digits
  let phoneRegex2 = /^[0-9]{10}+$/;
  let aophoneNumErr2 = document.getElementById("ufphoneNumErr2");
  if (!phoneNumber.value.match(phoneRegex2)) {
    aophoneNumErr2.innerHTML = "* Phone Number 2 is required";
    uaophoneNumErr2.style.color = "red";
    phoneNumber.style.border = "2px solid red";
    return false;
  } else {
    phoneNumber.style.border = "2px solid green";
  }

  //Validate Ward - a ward must be selected
  let wardAOErr = document.getElementById("wardUFErr");
  if (ward.value == "Default") {
    wardAOErr.innerHTML = "*Please select a ward";
    wardAOErr.style.color = "red";
    ward.style.border = "2px solid red";
    return false;
  } else {
    ward.style.border = "2px solid green";
  }
};

  //VALIDATION FUNCTION FOR FARMER ONE REGISTRATION FORM
  const registerFOform = () => {
    const firstName = document.foRegisterForm.firstNameFO;
    const lastName = document.foRegisterForm.lastNameFO;
    const userName = document.foRegisterForm.username;
    const dob = document.foRegisterForm.dobFO;
    const dor = document.getElementById("inputDOR");
    const foNumber = document.foRegisterForm.password;
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
    let fnameFOerr = document.getElementById("fnameFOerr");
    if (fnameRegex.test(firstName.value) == false) {
      fnameFOerr.innerHTML = "* First Name is required";
      fnameFOerr.style.color = "red";
      firstName.style.border = "2px solid red";
      return false;
    } else {
      firstName.style.border = "2px solid green";
    }

    //Validate Last Name.
    let lnameRegex = /^[A-Za-z]+$/;
    let lnameFOerr = document.getElementById("lnameFOerr");
    if (lnameRegex.test(lastName.value) == false) {
      lnameFOerr.innerHTML = "* Last Name is required";
      lnameFOerr.style.color = "red";
      lastName.style.border = "2px solid red";
      return false;
    } else {
      lastName.style.border = "2px solid green";
    }

    //Validate User Name.
    let unameRegex = /^[a-z]+$/;
    let unameFOerr = document.getElementById("unameFOerr");
    if (unameRegex.test(userName.value) == false) {
      unameFOerr.innerHTML = "* User Name is required";
      unameFOerr.style.color = "red";
      userName.style.border = "2px solid red";
      return false;
    } else {
      userName.style.border = "2px solid green";
    }

    //Validate Date of Birth
    let dobRegex = /^\d{1,2}-\w{3}-\d{4}$/;
    //    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    //   /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
    //   dobRegex.test(dob.value)
    let dobFOerr = document.getElementById("dobFOerr");
    if (date.year()>2010){
      dobUFerr.innerHTML = "*Must be 10yrs old and above";
      dobUFerr.style.color = "red";
      dob.style.border = "2px solid red";
      return false;
    }
    else if (!dob.value.match(dobRegex)) {
      dobFOerr.innerHTML = "* Date of Birth is required";
      dobFOerr.style.color = "red";
      dob.style.border = "2px solid red";
      return false;
    } else {
      dob.style.border = "2px solid green";
    }
    //Validate Date of Registration of Farmer One
    let dorRegex = /^\d{1,2}-\w{3}-\d{4}$/;
    //   /^\d{1,2}\/\d{1,2}\/\d{4}$/
    let dorFOerr = document.getElementById("dorFOerr");
    if (!dor.value.match(dorRegex)) {
      dorFOerr.innerHTML = "* Date of Registration is required";
      dorFOerr.style.color = "red";
      dor.style.border = "2px solid red";
      return false;
    } else {
      dor.style.border = "2px solid green";
    }

    //Validate Unique FO Number
    let foNumRegex = /^[A-Z]\w{5}$/;
    ///^[A-Z]\w{3,4}$/;
    let foNumErr = document.getElementById("foNumErr");
    if (!foNumber.value.match(foNumRegex)) {
      foNumErr.innerHTML = "* Unique FO Number is required";
      foNumErr.style.color = "red";
      foNumber.style.border = "2px solid red";
      return false;
    } else {
      foNumber.style.border = "2px solid green";
    }

    //Validate FO NIN Number
    let foNINRegex = /^[A-Z0-9]\w{13}$/;
    // /^\w{13}$/
    // /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
    let foNINerr = document.getElementById("foNINerr");
    if (!foNIN.value.match(foNINRegex)) {
      foNINerr.innerHTML = "* NIN is required";
      foNINerr.style.color = "red";
      foNIN.style.border = "2px solid red";
      return false;
    } else {
      foNIN.style.border = "2px solid green";
    }

    //Validate Farmer One Phone number
    let phoneRegex = /^[0-9]{10}+$/;
    let fophoneNumErr = document.getElementById("fophoneNumErr");
    if (!phoneNumber.value.match(phoneRegex)) {
      fophoneNumErr.innerHTML = "* Phone Number is required";
      fophoneNumErr.style.color = "red";
      phoneNumber.style.border = "2px solid red";
      return false;
    } else {
      phoneNumber.style.border = "2px solid green";
    }

    //Validate Ward - a ward must be selected
    let wardErr = document.getElementById("wardErr");
    if (ward.value == "Default") {
      wardErr.innerHTML = "*Please select a ward";
      wardErr.style.color = "red";
      ward.style.border = "2px solid red";
      return false;
    } else {
      ward.style.border = "2px solid green";
    }

    //Validate Period of Stay in Ward for Farmer One, must be more than 10 years
    // let x = ward.value;
    let stayPeriodErr = document.getElementById("stayPeriodErr");
    if (stayPeriod.value == "Default") {
      stayPeriodErr.innerHTML = "*Select Stay Period In ward";
      stayPeriodErr.style.color = "red";
      stayPeriod.style.border = "2px solid red";
      return false;
    } else {
      stayPeriod.style.border = "2px solid green";
    }

    //Validate Farmer One Residence Type
    let residenceErr = document.getElementById("residenceErr");
    if (residenceType.value == "Default") {
      residenceErr.innerHTML = "*Select your residence type";
      residenceErr.style.color = "red";
      residenceType.style.border = "2px solid red";
      return false;
    } else {
      residenceType.style.border = "2px solid green";
    }
    //Validate Farmer One Produce Type
    if (
      horticulture.checked == false &&
      poultry.checked == false &&
      diary.checked == false
    ) {
      produceFOerr.innerHTML = "*Select at least one your produce type";
      produceFOerr.style.color = "red";
      return false;
    }
  };

  //VALIDATION FUNCTION FOR URBAN FARMER REGISTRATION FORM
  const registerUFform = () => {
    const firstName = document.urbanFarmerForm.firstNameUF;
    const lastName = document.urbanFarmerForm.lastNameUF;
    const userName = document.urbanFarmerForm.username;
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
    let fnameUFerr = document.getElementById("fnameUFerr");
    if (fnameRegex.test(firstName.value) == false) {
      fnameUFerr.innerHTML = "* First Name is required";
      fnameUFerr.style.color = "red";
      firstName.style.border = "2px solid red";
      return false;
    } else {
      firstName.style.border = "2px solid green";
    }

    //Validate Last Name.
    let lnameRegex = /^[A-Za-z]+$/;
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
    } else {
      userName.style.border = "2px solid green";
    }

    //Validate Urban Farmer Date of Birth
    let dobRegex = /^\d{1,2}-\w{3}-\d{4}$/;
    let dobUFerr = document.getElementById("dobUFerr");
    if (date.year()>2010){
      dobUFerr.innerHTML = "*Must be 10yrs old and above";
      dobUFerr.style.color = "red";
      dob.style.border = "2px solid red";
      return false;
    }
    else if (!dob.value.match(dobRegex)) {
      dobUFerr.innerHTML = "* Enter Date of Birth";
      dobUFerr.style.color = "red";
      dob.style.border = "2px solid red";
      return false;
    } else {
      dob.style.border = "2px solid green";
    }
    //Validate Date of Registration
    let dorRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;
    let dorUFerr = document.getElementById("dorUFerr");
    if (!dor.value.match(dorRegex)) {
      dorUFerr.innerHTML = "* Enter Date of Registration";
      dorUFerr.style.color = "red";
      dor.style.border = "2px solid red";
      return false;
    } else {
      dor.style.border = "2px solid green";
    }

    //Validate Unique ID Number
    let idNumRegex = /^[0-9]\w{3}$/;
    let idNumErr = document.getElementById("idNumErr");
    if (!idNumber.value.match(idNumRegex)) {
      idNumErr.innerHTML = "* Enter valid id Number";
      idNumErr.style.color = "red";
      idNumber.style.border = "2px solid red";
      return false;
    } else {
      idNumber.style.border = "2px solid green";
    }

    //Validate FO NIN Number
    let ufNINRegex = /^[A-Z0-9]\w{13}$/;
    // /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
    //    /^[0-9a-zA-Z]\w{13}$/;
    let ufNINerr = document.getElementById("ufNINerr");
    if (!ufNIN.value.match(ufNINRegex)) {
      ufNINerr.innerHTML = "* Enter valid NIN";
      ufNINerr.style.color = "red";
      ufNIN.style.border = "2px solid red";
      return false;
    } else {
      ufNIN.style.border = "2px solid green";
    }

    //Validate Phone number 1
    let phoneRegex = /^[0-9]{10}+$/;
    let ufphoneNumErr1 = document.getElementById("ufphoneNumErr1");
    if (!phoneNumber.value.match(phoneRegex)) {
      ufphoneNumErr1.innerHTML = "* Phone Number is required";
      ufphoneNumErr1.style.color = "red";
      phoneNumber.style.border = "2px solid red";
      return false;
    } else {
      phoneNumber.style.border = "2px solid green";
    }

    //Validate Phone number 2
    let phoneRegex2 = /^[0-9]{10}+$/;
    let ufphoneNumErr2 = document.getElementById("ufphoneNumErr2");
    if (!phoneNumber.value.match(phoneRegex2)) {
      ufphoneNumErr2.innerHTML = "* Phone Number 2 is required";
      ufphoneNumErr2.style.color = "red";
      phoneNumber.style.border = "2px solid red";
      return false;
    } else {
      phoneNumber.style.border = "2px solid green";
    }

    //Validate Ward - a ward must be selected
    let wardUFErr = document.getElementById("wardUFErr");
    if (ward.value == "Default") {
      wardUFErr.innerHTML = "*Please select a ward";
      wardUFErr.style.color = "red";
      // alert('please select a ward')
      ward.style.border = "2px solid red";
      return false;
    } else {
      ward.style.border = "2px solid green";
    }

    //Validate Urban Farmer Produce Type
    let produceUFerr = document.getElementById("produceUFerr");
    if (
      horticulture.checked == false &&
      poultry.checked == false &&
      diary.checked == false
    ) {
      produceUFerr.innerHTML = "*Select at least one your produce type";
      produceUFerr.style.color = "red";
      return false;
    }
  };
