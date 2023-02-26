
// Var review
const hello = 'greetings to u ';
// ES6 - constant that cannot change

var user = 'jonathan M ';
// legacy keyword for js

const sayName = 'Jon';
function sayNamee() {
  let sayName = 'M';
  console.log(sayName);
}
sayNamee();

// the sayName original value from line 9 will remain the same. Let enforces the other sayName variable to stay within the scope

//Template Strings - Used to concantenate strings and use variables with ${}

const firstName = 'Jonathan ';
const lastName = 'Mohabir ';

function sayGreetingToMe() {
  console.log(`Hi there ${firstName} ${lastName} how's it goin `);
}
