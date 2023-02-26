// Spread Operator Review

const firstArray = ['test', 'test2', 'test3'];
const secondArray = ['secondTest', 'secondTest2', 'secondTest3'];

const newArray = [...firstArray, ...secondArray];

console.log(newArray.join(','));
