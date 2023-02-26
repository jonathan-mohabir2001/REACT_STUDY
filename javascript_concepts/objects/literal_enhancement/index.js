/* 
Object Literal Enhancement is the process of grabbing a gloablly scoped 
variable and then assigning it to an object 
*/
const firstName = 'Jonathan';
const secondName = 'Mohabir';
// delcare global variables
const newPerson = { firstName, secondName };
// assign values to newPerson object
console.log(newPerson);
// properties are now outputted
const brand = 'Nissan';
const model = 'GTR Nismo';
// Create two variables as gloablly scoped constants 
const someVehicle = {
  brand,
  model,
  // no need to : assign value because we're grabbing existing 
  driveSelf() {
    return `I am a ${this.brand} and i am a ${this.model}, i go vroom vroom `;
  },
};
console.log(someVehicle.driveSelf());
