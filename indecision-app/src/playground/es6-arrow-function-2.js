// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

const addArrowFunction = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(addArrowFunction(25, 78));

// *this* keyword - no longer bound

const user = {
    name: "Stesha",
    cities: [ "Santa Rosa", "Honolulu", "Santa Monica"],
    // es6 method-definition syntax
    printPLacesLived() {
        //for each returns three statements
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
        // map returns an updated array
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPLacesLived());