// This js file continues the review of varibles
//Template Strings - needs `` to be around the statement when trying

// To work with this understand the concept of string contatination

const firstName = 'Jonathan';
const middleName = 'Bali';
const lastName = 'Mohabir';

function outPutNames() {
  console.log(
    'Hi there my name is:',
    firstName + ' ' + middleName + ' ' + lastName
  );
}
outPutNames();
// String contatenced function but used quotation marks for spacing

function templateStringOutput() {
  console.log(`Hi there my name is ${firstName} ${middleName} ${lastName}`);
}
templateStringOutput();
// Template strings utilized.
