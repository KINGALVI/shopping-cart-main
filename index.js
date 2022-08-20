document.getElementById('btn-case-plush').addEventListener('click', function () {
  const CaseNumberField = document.getElementById('case-btn-field');
  const CaseNumberFieldString = CaseNumberField.value;
  const PriviousCaseNumber = parseInt(CaseNumberFieldString);
  const NewCaseNumder = PriviousCaseNumber + 1;
  CaseNumberField.value = NewCaseNumder;
})

document.getElementById('btn-case-defalt').addEventListener('click', function () {
  const CaseNumberField = document.getElementById('case-btn-field');
  const CaseNumberFieldString = CaseNumberField.value;
  const PriviousCaseNumber = parseInt(CaseNumberFieldString);
  const NewCaseNumder = PriviousCaseNumber - 1;
  CaseNumberField.value = NewCaseNumder;
})