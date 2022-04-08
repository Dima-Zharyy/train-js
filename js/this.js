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

const counter = {
  value: 0,
  increment(value) {
    console.log(this);
    this.value += value;
  },
  decrement(value) {
    console.log(this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
console.log(counter);
updateCounter(1, counter.decrement.bind(counter));
console.log(counter);
