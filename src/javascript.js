const person = {
  name: "Jess",
  // these is a method from a person object
  walk: function() {
    console.log("this", this);
    setTimeout(() => {
      //callback function with arrow function, inherits this
      console.log("timeout this", this);
    });
  },
  talk() {
    // same as above
    console.log("this", this);
  }
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

person.walk();
person.talk(); // this of object

const walk = person.walk.bind(person); // pass person in this by bind

walk(); // this of window

const square = function(number) {
  return number * number;
};
// arrow function
const square2 = number => number * number;

console.log(square(5));
console.log(square2(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
  { id: 4, isActive: true }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});
// arrow function
const activeJobs2 = jobs.filter(job => job.isActive); // return each that is true

console.log(activeJobs);
console.log(activeJobs2);

// -- Array.map()

const colors = ["red", "green", "blue"];
// transform each
const items = colors.map(color => `<li>${color}</li>`); // template literal
console.log(items);

// --- Object Destructuring

const address = {
  street: "123 street",
  city: "city",
  country: "country"
};

// const street = address.street;
const { street: st, city: ct, country: cy } = address;

// console.log(street, city, country);

console.log(st);
console.log(ct);
console.log(cy);

// ---  Spread operator

const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);

const combined = [...first, 3.5, ...second];

console.log(combined);

// --- Classes

class People {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

const people = new People("Jess");

console.log(people.name);
people.walk();

// --- Inheritance

class Teacher extends People {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Mark", "Master");
console.log(teacher.name);
teacher.teach();
teacher.walk();

// --- Modules
