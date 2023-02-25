// overview of JS function

//Function Declarations
function greeting() {
  console.log('Hi there!');
}
greeting();
function doMath() {
  console.log(35 * 56);
}
doMath();
// two regular functions created, this is sytax for general functions

// Function Expressions - Variables assigned a function
const findPay = function (hourlyRate, hoursWorked) {
  return hourlyRate * hoursWorked;
};
console.log(findPay(30.0, 40.0));

const findTaxes = function (finalPay) {
  let paidAmount = findPay(30.0, 40.0);
  let taxBurden = paidAmount * 0.26;
  finalPay = paidAmount - taxBurden;

  console.log(
    `Your pay pre tax is $${paidAmount}, after taxes it is $ ${finalPay}`
  );
};

console.log(findTaxes());
