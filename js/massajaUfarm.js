const agricForm = () => {
  const firstName = document.foRegisterForm.firstNameFO;
  const lastName = document.foRegisterForm.lastNameFO;
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

  //Validate First Name.
  let fnameRegex = /^[A-Za-z]+$/;
  if (fnameRegex.test(firstName.value) == false) {
    alert("Please input first name");
    firstName.style.border = "2px solid red";
  } else {
    firstName.style.border = "2px solid green";
  }

  //Validate First Name.
  let lnameRegex = /^[A-Za-z]+$/;
  if (lnameRegex.test(lastName.value) == false) {
    alert("Please input last  name");
    lastName.style.border = "2px solid red";
  } else {
    lastName.style.border = "2px solid green";
  }

  //Validate Date of Birth
  let dobRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!dob.value.match(dobRegex)) {
    alert("Please input date of registration");
    dob.style.border = "2px solid red";
  } else {
    dob.style.border = "2px solid green";
  }
  //Validate Date of Registration
  let dorRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!dor.value.match(dorRegex)) {
    alert("Please input date of registration");
    dor.style.border = "2px solid red";
  } else {
    dor.style.border = "2px solid green";
  }

  //Validate Unique FO Number
  let foNumRegex = /^[0-9]+$/;
  if (!foNumber.value.match(foNumRegex)) {
    alert("Please input FO number");
    foNumber.style.border = "2px solid red";
  } else {
    foNumber.style.border = "2px solid green";
  }

  //Validate FO NIN Number
  let foNINRegex =  /^[A-Z]\w{13}$/;
  // /^\w{13}$/
  // /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
  if (!foNIN.value.match(foNINRegex)) {
    alert("Please input correct FO NIN Number");
    foNIN.style.border = "2px solid red";
  } else {
    foNIN.style.border = "2px solid green";
  }

  //Validate Phone number
  let phoneRegex = /^[0-9]+$/;
  if (!phoneNumber.value.match(phoneRegex)) {
    alert("Please input phone number");
    phoneNumber.style.border = "2px solid red";
  } else {
    phoneNumber.style.border = "2px solid green";
  }

  //Validate Ward - a ward must be selected
  if (ward.value == "Default") {
    alert("Please select a ward");
    ward.style.border = "2px solid red";
  } else {
    ward.style.border = "2px solid green";
  }

  //Validate Period of Stay in Ward
  let x = ward.value;
  if (stayPeriod.value == "Default" && x != "Default") {
    alert(
      "Please indicate how long you have stayed in" + " " + x + " " + "ward"
    );
    stayPeriod.style.border = "2px solid red";
  } else {
    stayPeriod.style.border = "2px solid green";
  }

  //Validate Residence Type
  if (residenceType.value == "Default") {
    alert("Please select your residence type");
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
