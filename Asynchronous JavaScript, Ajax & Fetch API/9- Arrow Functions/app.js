// const sayHello = function(){
//     console.log('Hello');
// }

// One line function don't need braces
// const sayHello = () => console.log('Hello');

// const sayHello = () => {console.log('Hello')};

// One line returns
// const sayHello = () => 'Hello';

// const sayHello = () => {return 'Hello'};

// Return object
// const sayHello = () => ({msg: 'Hello'});

// A Single parameter doesn't need parensthsis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple parameters need parensthsis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');
//console.log(sayHello());

const users = ['Nathen', 'John', 'William'];
// const nameLengthes = users.map(function(user){
//     return user.length;
// });

// Shorter
// const nameLengthes = users.map(user=> {return user.length;});

// Shortest
const nameLengthes = users.map(user => user.length);
console.log(nameLengthes);