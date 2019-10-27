"use strict";

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

var addArrowFunction = function addArrowFunction(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(addArrowFunction(25, 78));

// *this* keyword - no longer bound

var user = {
    name: "Stesha",
    cities: ["Santa Rosa", "Honolulu", "Santa Monica"],
    // es6 method-definition syntax
    printPLacesLived: function printPLacesLived() {
        var _this = this;

        //for each returns three statements
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
        // map returns an updated array
        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
    }
};

console.log(user.printPLacesLived());

var multiplier = {
    numbers: [13, 15, 17, 19, 21],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (int) {
            return _this2.multiplyBy * int;
        });
    }
};

console.log(multiplier.multiply());
