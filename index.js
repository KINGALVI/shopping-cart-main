function UpdateCaseNumber(IsIncrease) {
  const CaseNumberField = document.getElementById('case-btn-field');
  const CaseNumberFieldString = CaseNumberField.value;
  const PriviousCaseNumber = parseInt(CaseNumberFieldString);
  let NewCaseNumder;
  if (IsIncrease == true) {
    NewCaseNumder = PriviousCaseNumber + 1;
  }
  else {
    NewCaseNumder = PriviousCaseNumber - 1;
  }
  CaseNumberField.value = NewCaseNumder;
  return NewCaseNumder;
}
function UpdateCaseTotalPrices(NewCaseNumber) {
  const CaseTotalPrice = NewCaseNumber * 59;
  const CaseTotalElement = document.getElementById('Case-Total');
  CaseTotalElement.innerText = CaseTotalPrice;
}
document.getElementById('btn-case-plush').addEventListener('click', function () {
  const NewCaseNumber = UpdateCaseNumber(true);
  UpdateCaseTotalPrices(NewCaseNumber);
  calculatesubtotal()
})
document.getElementById('btn-case-defalt').addEventListener('click', function () {
  const NewCaseNumber = UpdateCaseNumber(false);
  UpdateCaseTotalPrices(NewCaseNumber);
  calculatesubtotal()
})



function UpdatePhoneNumber(PhoneNumIncrease) {
  const PhoneNumberField = document.getElementById('phone-number-field');
  const PhoneNumberString = PhoneNumberField.value;
  const PriviousPhoneNumber = parseInt(PhoneNumberString);
  let NewphoneNumber;
  if (PhoneNumIncrease == true) {
    NewphoneNumber = PriviousPhoneNumber + 1;
  }
  else {
    NewphoneNumber = PriviousPhoneNumber - 1;
  }
  PhoneNumberField.value = NewphoneNumber;
  return NewphoneNumber;
}

function UpdateCaseTotalPrice(NewphoneNumber) {
  const PhoneTotalPrice = NewphoneNumber * 1219;
  const PhoneTotalElement = document.getElementById('phone-total');
  PhoneTotalElement.innerText = PhoneTotalPrice;
}

function getElementvalueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const phoneTotalElementSting = phoneTotalElement.innerText
  const CurrentphoneTotal = parseInt(phoneTotalElementSting);
  return CurrentphoneTotal;
}

document.getElementById('phone-btn-plus').addEventListener('click', function () {
  const NewphoneNumber = UpdatePhoneNumber(true);
  UpdateCaseTotalPrice(NewphoneNumber);

  calculatesubtotal();
});

document.getElementById('phone-btn-minus').addEventListener('click', function () {
  const NewphoneNumber = UpdatePhoneNumber(false);
  UpdateCaseTotalPrice(NewphoneNumber);
  calculatesubtotal();
})


function setTextElementVlueById(elementId, value) {
  const SubTotalElement = document.getElementById(elementId);
  SubTotalElement.innerText = value;
}

function calculatesubtotal() {
  const CurrentPhoneTotal = getElementvalueById('phone-total');
  const CurrentCaseTotal = getElementvalueById('Case-Total');
  const CurrentSudTotal = CurrentCaseTotal + CurrentPhoneTotal;
  setTextElementVlueById('sub-total', CurrentSudTotal);
  const texAmountString = (CurrentSudTotal * 0.1).toFixed(2);
  const texAmount = parseFloat(texAmountString);
  setTextElementVlueById('tax-total', texAmount);
  const finalAmount = CurrentSudTotal + texAmount;
  setTextElementVlueById('final-total', finalAmount);
}