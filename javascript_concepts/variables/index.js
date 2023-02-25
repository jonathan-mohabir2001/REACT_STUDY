//Light pacakage.json attached to the variables directory to run these js files.
// var keyword - values can change
var pizza = 'veggie';
console.log(pizza);
// original value logs veggie
pizza = 'meat lovers';
console.log(pizza);
// new value... logged
// changes of the variable pizza is overwritten using the var keyword.
const flavour = true;
console.log(flavour);
// flavour = false - this statement cannot run as the const keyword hard codes the value to true
// Lexical scoping and the Let keyword
var saying = 'if it aint broke dont fix it';
if (saying) {
  var saying = 'go break some eggs';
  console.log('Value of saying:', saying);
}
console.log(saying);
/*
The problem with the code above is that 
the value of saying was originally to be the first saying 
but then the if block changes the value 

Use the Let keyword to block the scope of the variable only to its if block 
*/
var vehicle = 'nissan';
if (vehicle) {
  let vehicle = 'Ford';
  console.log('VEHICLE'), vehicle;
}
console.log(vehicle);
// the original value of Nissan Still Appears
