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
})
document.getElementById('btn-case-defalt').addEventListener('click', function () {
  const NewCaseNumber = UpdateCaseNumber(false);
  UpdateCaseTotalPrices(NewCaseNumber);
})
function UpdatePhoneNumber(PhoneNumIncrease){
  const PhoneNumberField= document.getElementById('phone-number-field');
  const PhoneNumberString=PhoneNumberField.value;
  const PriviousPhoneNumber= parseInt(PhoneNumberString);
  let NewphoneNumber;
  if(PhoneNumIncrease==true){
    NewphoneNumber = PriviousPhoneNumber+1;
  }
  else{
    NewphoneNumber = PriviousPhoneNumber-1;
  }
  PhoneNumberField.value=NewphoneNumber;
  return NewphoneNumber;
}
function UpdateCaseTotalPrice(NewphoneNumber) {
  const PhoneTotalPrice = NewphoneNumber * 1219;
  const PhoneTotalElement = document.getElementById('phone-case-total');
  PhoneTotalElement.innerText = PhoneTotalPrice;
}
document.getElementById('phone-btn-plus').addEventListener('click',function(){
  const NewphoneNumber=UpdatePhoneNumber(true);
  UpdateCaseTotalPrice(NewphoneNumber);
  });
document.getElementById('phone-btn-minus').addEventListener('click',function(){
  const NewphoneNumber=UpdatePhoneNumber(false);
  UpdateCaseTotalPrice(NewphoneNumber);
})