"use strict";

var square = function square(x) {
    return x * x;
};

console.log(square(8));

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(10));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName("Stesha McKindle"));
