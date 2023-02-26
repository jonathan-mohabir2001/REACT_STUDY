//Practising Object Deconstruction and object enhancement

const newObject = {
  language: 'JavaScript',
  stack: 'MERN',
  paysGood: true,
  ide: 'VS code',
};
const { language, stack } = newObject;
console.log(language, stack);
// grabbing values from existing object, outputted js and mern

const myObject = {
  favFood: 'Wings',
  favShow: 'Breaking bad',
  favMusic: 'Rap, dancehall, soca, pop, r&b',
};

let { favFood, favMusic } = myObject;
// grab the values, use lexical scoping let keyword to change existing values
favFood = 'Pizza';
favMusic = 'Jazz';
// change the values
console.log(favFood, favMusic);
// new values now logged to console

// Literal Enancement - Creating values and then assining them to objects.

const brand = 'Rolls Royce';
const model = 'Ghost';

const vehicleObject = {
  brand,
  model,
  // grabbed the existing globally scoped variables brand and model.
  drive() {
    return `Vroom Vroom here goes me: the ${this.brand} ${this.model}`;
  },
};
console.log(vehicleObject.drive());
