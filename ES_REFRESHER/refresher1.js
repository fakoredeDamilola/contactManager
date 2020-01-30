//CONST AND LET
// const name = "dammy";
function dam() {
  const name = "f";
}

//arrow function
const sayHello = name => console.log("hello");
sayHello();

//foreach
const arr = [2, 3, 4, 5, 6];
arr.forEach((arr, index) => console.log(index, arr));

//map
console.log(arr.map(ar => ar * ar));
console.log(arr);

//filter
const people = [
  { id: 1, name: "damilola" },
  { id: 2, name: "dayo" },
  { id: 3, name: "dami" },
  { id: 4, name: "dam" }
];
console.log(people.filter(peeps => peeps.id % 2 == 0));

//SPREAD
const newArr = [30, 40, ...people, ...arr];
console.log(newArr);
const person = {
  name: "damilola",
  age: 22
};
const student = {
  subject: "maths",
  ...person
};
console.log(student);
const arr2 = [...arr.filter(num => num !== 2)];
console.log(arr2);

//destructing
[a, b, c, d] = people;
const { subject } = student;
console.log(subject);
console.log(a);
const profile = {
  name: "John Goe",
  address: {
    street: "40 main st",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { name, address, hobbies } = profile;
const { street } = profile.address;
console.log(name, street, hobbies);

//CLASS
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    (this.height = "50ft"), this.number;
    console.log("contrustor is initiated immediately it is created with new");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
  sayHeight() {
    console.log(`My height is ${this.height}`);
  }
}
const person1 = new People("Fakorede Damilola", 70);

class Customer extends People {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `you owe ${this.balance}`;
  }
}
const cus = new Customer("dahyo", 66, 77);
console.log(cus.info());

//file 1 (file1.js)
// x
