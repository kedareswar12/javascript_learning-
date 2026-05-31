function Person(name, age) {
  this.name = name;
  this.age = age;
}

let Student = new Person("Kedar", 21);
console.log(Student);
// ++++++++++++++++++++++++++++++++++++++++++++++++

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} Makes the sound`;
};

let dog = new Animal("Pomarian");
console.log(dog.sound());

// see with out prototype the sound function need to be written in the Animal function to get used by the dog object in future  and the code looks like

// function Animal(species,sound){
//   this.species = species
//   this.sound = function() {
//     return `${species} Make sound `
//   }
// }

// let dog  = new Animal("Pomarin");

// the contect goes like this

/* 

let dog  = new Animal("Pomarin");

new object will be created , you have passed the pomarian since the animal has the variable species

let dog = {};
dog.species = "Pomeranian";

meaning 

-> inside dog 

{
  species: "Pomeranian"
}


 */

/* Create an Employee constructor with:

name
salary

Add a prototype method getSalary() that returns the salary */

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.getsalary = function () {
  return `${this.name} recieved the salary`;
};

let Taxpay = new Employee("Raghu", 350000);
console.log(Taxpay.getsalary());
/* 

Prototype Chain

Create:

Animal constructor
Prototype method eat()

Create:

Dog constructor

Make Dog inherit from Animal. */

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function () {
//   return `${this.name} is eating`;
// };

// function Dog(name, breed) {
//   Animal.call(this.name);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new");
  }
  this.name = name;
}

let tea = Drink("tea");
let coffee = Drink("coffee");
