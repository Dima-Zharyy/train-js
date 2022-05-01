// console.log('Hi guys!');
// // 1. Створи функцію, яка проводить пошук обєкта в масиві по id та виводить його в консоль.
// //
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// const foo = number => users.find(obj => obj.id === number);
// console.log(foo(2));

// // 2. Виведи в консоль стрічку слідуючого типу: "Имя - позиция в массиве Х и сам массив"
//
// const robots = ['Bender', 'Awesom-O', 'Johnny 5'];

// robots.forEach((robot, index, array) =>
//   console.log(`${robot} - index ${index} in `, array)
// );

// // 3. Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // Але рахуватись мають лише позитивні числа!!!

// const positiveSum = arr => {};

// positiveSum([2, 4, 6, 8]); // 20
// positiveSum([0, -3, 5, 7]); // 12

// const sumPositiveNumbers = numbers => {
//   const positive = numbers.filter(number => number > 0);
//   console.log(positive.reduce((total, number) => total + number, 0));
// };

// sumPositiveNumbers([2, 4, 6, 8]); // 20
// sumPositiveNumbers([0, -3, 5, 7]); // 12

// // 4. Відсортуй обєкти по збільшеню та зменшеню score
//
// const users = [
//   { name: 'Victor', score: 20 },
//   { name: 'Mario', score: 10 },
//   { name: 'Tatiana', score: 30 },
// ];

// const usersSortedByScoreDesc = [...users].sort((a, b) => a.score - b.score);
// const usersSortedByScoreAsc = [...users].sort((a, b) => b.score - a.score);

// console.log(usersSortedByScoreDesc); // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
// console.log(usersSortedByScoreAsc); // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]

// // 7. Напишите две функции:
// - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает callback функцию
// - greet(name) - коллбек, принимающий имя и логирующий в консоль строку "Привет <name>"
// Реализуй проверку, что prompt не пустой

// letMeSeeYourName(greet); // Привет <name>

// 8. Напишите две функции:
// - makeProduct(name, price, callback) - принимает имя и цену товара, а так же callback.
// Функция создает объект товара, добавляя ему уникальный id в свойство id и вызывает callback,
// передавая ему созданный объект.
// - showProduct(product) - коллбек, принимающий объект продукта и логирующий его в консоль

// function makeProduct(name, price, callback) {
//   const obj = {
//     name,
//     price,
// id: Date.now();
//   };
//   callback(obj);
// }
// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('Fish', 350, showProduct);

// // 9. Выполни рефакторинг makeDish так, чтобы не нужно было каждый раз передавать имя шефа.
// // Напишите функцию makeShef(shefName), которая возвращает функцию makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie');
// makeDish('Poly', 'muffins');

// // 12. Напишите функцию savePassword(password) которая принимает
// // пароль и возвращает внутреннюю функцию, которая принимает
// // строку и возвращает буль true, если строка совпадает с сохраненным
// // паролем и false - если не совпадает

const savePassword = password => {};
console.log(foo('qwerty')); // true or false
