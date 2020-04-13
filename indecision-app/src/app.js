// import subtract, {square, add} from './utils.js';
// import isSenior, {isAdult, canDrink} from './person.js';
// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running!!');

// console.log(square(10));
// console.log(add(35, 45));
// console.log(subtract(451, 65));

// console.log(isAdult(51));
// console.log(canDrink(51));
// console.log(isSenior(51));

// console.log(validator.isEmail('cleodecarabas@yahoo.com'));

const template = <p>THIS IS JSX FROM WEBPACK!</p>;
ReactDOM.render(template, document.getElementById('app'));
