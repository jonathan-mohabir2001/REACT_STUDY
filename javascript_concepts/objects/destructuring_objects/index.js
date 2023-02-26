//Looking into Objects

//Destructuring - grabbing a key value from an existing object and using it elseware.

const hamburger = {
  meat: 'Ground Turkey',
  cheese: 'American',
  cheap: true,
  bread: 'Brioche',
};
// object with 4 fields
const { meat, cheese } = hamburger;
// grab the values of meat and cheese, bring it outside of the object
console.log(meat, cheese);

const pizzaIngredients = {
  dough: 'Sour Dough',
  cheese: 'Three type blend',
  topping: 'pepperoni',
  sauce: 'tomato',
};
// existing object to represent pizza ingridents

// how the let keyword works in this context

let { dough, topping } = pizzaIngredients;
dough = 'Regular Dough';
topping = 'Ground Chicken ';
console.log(dough, topping);
// existing values will not  display, let allows us to now change the value without affecting the object

// Objects can also be destructured when using a function

const makeADeveloper = (somePerson) => {
  console.log(`${somePerson.firstName} is now a developer `);
};
// create a function with the object as a parameter, access the props using dot notation.
const somePerson = {
  firstName: 'Jonathan ',
};
makeADeveloper(somePerson);
// create the object with the corresponding property, and then call the function, pass the object. 
