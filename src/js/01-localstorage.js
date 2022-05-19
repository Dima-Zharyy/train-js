//
//
//

const { parse } = require('path');

// const { json } = require('stream/consumers');

localStorage.setItem('my-data', 'opaopaopaop');

console.log(localStorage);

//

const user = {
  name: 'Dima',
  age: 34,
};
localStorage.setItem('my-data-2', JSON.stringify(user));

const savedData = localStorage.getItem('my-data-2');
const parsedData = JSON.parse(savedData);

console.log(parsedData);

//   {
//     name: 'Dima',
//     age: 34,
//   },
//   {
//     name: 'Dima',
//     age: 34,
//   },
//   {
//     name: 'Dima',
//     age: 34,
//   },
// ];

// console.log(JSON.stringify(user));

// const savedUserData = '{"name":"Dima","age":34}';

// console.log(JSON.parse(savedUserData));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// console.log(localStorage);
//
// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);
