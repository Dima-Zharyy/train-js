'use strict';
// const user = {
//   tag: 'Mango',
//   foo: function showThis() {
//     this.tag2 = this.tag;
//     console.log(this);
//   },
// };

// user.foo(); // this вызывается в контексте user

// const action = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log(this);
// };

// const user = {
//   tag: 'Mango',
//   showThis() {
//     console.log(this);
//   },
// };

// action.call(user, 1, '23', 'Hello');
// action.apply(user, [1, 3, ...[3]]);

// const changeColor = function (color) {
//   console.log(this);
//   this.color = color;
// };

// const hat = {
//   color: 'red',
// };

// const hoody = {
//   color: 'green',
// };

// const changeHat = changeColor.bind(hat);

// changeHat('super puper RED');
// console.log(hat);

// changeColor.call(hat, 'super RED');
// changeColor.call(hoody, 'super puper GREEN');

// console.log(hat);
// console.log(hoody);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log(this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log(this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);
// updateCounter(1, counter.decrement.bind(counter));
// console.log(counter);

// const model = {
//   model: 'Tesla',
// };

// const car = Object.create(model);
// car.wheels = 4;
// car.engine = 1;

// const whiteCar = Object.create(car);
// whiteCar.color = 'white';
// whiteCar.extra = 'turbo';
// whiteCar.super = function () {
//   console.log('Privet');
// };
// console.log(whiteCar);

// // console.log(whiteCar.color);
// // console.log(whiteCar.model);

// // for (const key in whiteCar) {
// //   if (whiteCar.hasOwnProperty(key)) console.log(key);
// // }

// const keys = Object.keys(whiteCar);
// console.log(keys);

// const objC = {
//   z: 5,
// };

// console.log('objC: ', objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('ObjB: ', objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA: ', objA);

// const dummyObj = Object.create({ message: "This is prototype's property" });
// dummyObj.message = 'This is own property';
// console.log(dummyObj);

// console.log(dummyObj.message);

// const Car = function (
//   { brand, model, price } = { brand: 1, model: 2, price: 3 }
// ) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// console.log(Car);

// const myCar = new Car({ brand: 'BMW', price: 34000 });

// console.log(myCar);

// const myCar2 = new Car({ brand: 'Tesla', model: 'X', price: 48000 });
// console.log(myCar2);

// const myCar3 = new Car();
// console.log(myCar3);

const User = function ({ name, email, password } = {}) {
  this.name = name;
  this.email = email;
  this.password = password;
};

User.prototype.changeName = function (name) {
  this.name = name;
};

User.prototype.changeMail = function (email) {
  this.email = email;
};

const dima = new User({
  name: 'Dima',
  email: 'd1mkaa@yahoo.com',
  password: 123345,
});
console.log(dima);
dima.changeName('Dmitrulin');
dima.changeMail('my-new-email@123.com');
console.table(dima);
