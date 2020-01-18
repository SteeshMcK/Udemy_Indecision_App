class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi! I am ' + this.name + ".";
        return `Hi. My name is ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}

const me = new Person('Stesha McKindle', 50, 'History');
console.log(me);


const other = new Person();
console.log(other);

