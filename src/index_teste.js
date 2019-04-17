// ##### OBJECT BINDING BEGIN #####
/*
const person = {
    name: "Alan",
    walk() {
        console.log(this);
    }
}

const walk = person.walk;
const walk2 = person.walk.bind(person);

person.walk();

console.log(walk);
console.log(walk2);

walk(); // undefined or window if strict mode is disable
walk2(); // we get the person object in console
*/
// ##### OBJECT BINDING END #####





// ##### ARROW FUNCTION BEGIN #####
/*
// const square = function (number) {
//     return number * number;
// }

const square = number => number * number;
console.log(square(5));
*/
// ##### ARROW FUNCTION END #####





// ##### FILTER METHOD IN ARRAY BEGIN #####
/*
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

// const activeJobs = jobs.filter(function (job) { return job.isActive });
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
*/
// ##### FILTER METHOD IN ARRAY END #####






// ##### CALLBACK THIS WITH ARROW FUNCTION BEGIN #####
/*
const person2 = {
    talk() {
        var self = this;
        setTimeout(function () {
            console.log("this", this)
        }, 1000)
        setTimeout(function () {
            console.log("self", self)
        }, 1000)
        setTimeout(() => {
            console.log("this correct inheritance", this)
        }, 1000);
    }
};

person2.talk();
*/
// ##### CALLBACK THIS WITH ARROW FUNCTION END #####






// ##### MAP AND TEMPLATE LITERAL BEGIN #####
/*
const colors = ['red', 'green', 'blue'];

// const items = colors.map(function (color) {
//     return '<li>' + color + '</li>'
// });

// const items = colors.map(color => '<li>' + color + '</li>');

const items = colors.map(color => `<li>${color}</li>`); // template literal $
console.log(items);
*/
// ##### MAP AND TEMPLATE LITERAL END #####






// ##### OBJECT DESTRUCTIN BEGIN #####
/*
const address = {
    street: '',
    city: '',
    country: ''
};

const street = address.street;
const city = address.city;
const country = address.country;

// Right way to declare variable of an object
const { street, city, country } = address;
// Other way to declare variable of an object to a custom name property
const { street: st } = address;
*/
// ##### OBJECT DESTRUCTIN END #####






// ##### COMBINING AND SPREAD OPERATOR WITH ARRAY BEGIN #####
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const combined2 = [...first, ...second];
console.log(combined2);

const combined3 = [...first, 'a', ...second, 'b'];
console.log(combined3);
*/
// ##### COMBINING AND SPREAD OPERATOR WITH ARRAY END #####






// ##### COMBINING AND SPREAD OPERATOR WITH OBJECT BEGIN #####
/*
const first = { name: 'Alan' };
const second = { job: 'Developer' };

// simple clone
const clone = { ...first };
console.log(clone);

const combine = { ...first, ...second, location: 'Brazil' };
console.log(combine);
*/
// ##### COMBINING AND SPREAD OPERATOR WITH OBJECT END #####





// ##### CLASSES AND INHERITANCE BEGIN #####

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walk');
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

const person = new Person('Alan');
console.log(person);
const teacher = new Teacher('Mosh', 'Specialist');
console.log(teacher);

// ##### CLASSES AND INHERITANCE END #####
