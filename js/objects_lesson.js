"use strict";

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
// ];

// // const totalRank = Object.values(players.map((player) => player.rank)).reduce(
// //   (total, rank) => total + rank
// // );

// const totalRank = players.reduce((total, player) => total + player.rank, 0);

// console.log(totalRank);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, item) => [...acc, ...item.tags], []);

const statistic = allTags.reduce(
  (acc, item) => (acc[item] ? (acc[item] += 1) : (acc[item] = 1)),
  {}
);

console.log(statistic);

// console.log(allTags);

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalSum = cart.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );

// console.log(totalSum);

// const salary = {
//   mango: 100,
//   mimi: 200,
//   feo: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, number) => total + number,
//   0
// );

// console.log(totalSalary);

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
// ];

// const haveI = players.every((player) => player.rank > 110);
// console.log(haveI);

// const findMango = players.find((player) => player.tag === "Ajax");
// console.log(findMango);

// const numbers = [4, 56, 4, 356, 345, 345, 3234];

// const biggerThanThousand = numbers.filter((number) => number > 1000);
// console.log(Number(numbers));

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter((player) => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Ajax", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Kiwi", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const a = "Poly";
// // const newArr = players.map((player) => player.name);
// const player_2_Viki = players.map((player) =>
//   player.name === a ? { ...player, name: "Viki" } : player
// );

// // const isOnline = players.filter((player) => player.timePlayed > 400);

// // console.log(isOnline);
// console.log(player_2_Viki);
// console.log(players);

// const filteredByOnline = players.filter((player) => player.online);
// const filteredAndSortedOflineByName = players
//   .filter((player) => !player.online)
//   .sort((a, b) => b.points - a.points);

// console.log(filteredAndSortedOflineByName);

// console.log(filteredByOnline);

// const add = function (a, b, c) {
//   return a + b + c;
// };

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter((num) => num > 2);

// console.log(greaterThenTwo);

// const multiplyByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multiplyByThree);

// const sorted = multiplyByThree.sort((a, b) => a - b);
// console.log(sorted);

// const res = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);

// console.log(res);

// const add = (a, b, c) => a + b + c;

// console.log(add(4, 5, 3));

// const hello = (name) => console.log(`Hello ${name}`);

// hello("Dima");
// const arr = [1, 2, 4, 5, 6, 7, 8];

// const filter = function (array, callback) {
//   const result = [];

//   for (const item of array) {
//     const passed = callback(item);
//     if (passed) {
//       result.push(item);
//     }
//   }

//   return console.log(result);
// };

// const setting = function (a) {
//   return a > 2;
// };

// filter(arr, (a) => a > 7);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// filter(fruits, (a) => a.isFresh === false);

// const fnA = function (message, callback, number) {
//   console.log(message);
//   callback(number);
// };

// const fnB = function (num) {
//   console.log(`This is function B with output: ${num}`);
// };

// fnA("1st Function", fnB, 150);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const divide = function (a, b) {
//   return a / b;
// };

// const multiply = function (a, b) {
//   return a * b;
// };

// doMath(4, 5, add);

// const greet = () => {
//   console.log("Welcome to Raddison");
// };

// greet();

// const guestName = (surname) => {
//   console.log(`The Guest name is: ${surname}`);
// };

// guestName("Dima");

// const add = (a, b) => {
//   console.log(`The sum of ${a} and ${b} is: ${a + b}`);
// };

// add(3, 5);

// const message = (a, b) => {
//   console.log(`First setting is: ${a}`);
//   console.log(`Second setting is: ${b}`);
// };

// message(3, 5);

// const fn = function (name) {
//   console.log(`Гость ${name} успешно зарегистрирован`);
// };

// const fn_1 = function (surname, callback) {
//   console.log(`Регистрируем гостя ${surname}.`);
//   callback(surname);
// };

// fn_1("Dima Zharyy", fn);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return console.log(
//         `Error! Potion ${newPotion} is already in your inventory!`
//       );
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const werwer = { name: "Stone skin", price: 520 };
// console.log(atTheOldToad.potions[2].name === werwer.name);

// atTheOldToad.addPotion(werwer);

// const obj1 = { apple: 1, orange: 3 };
// const obj2 = { apple: 2222, cherry: 9 };

// const newArr = { ...obj2, ...obj1 };
// console.log(newArr);

// const arr1 = [1, 2, 3, 4, 5];
// const copyArr1 = [...arr1];
// copyArr1.push(6);

// console.log(arr1);
// console.log(copyArr1);

// const object1 = { apple: 1, orange: 3 };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   puper: 10,
// };

// const fn = function ({ rating, tags }) {
//   console.log(rating);
//   console.log(tags);
// };

// fn(apartment);

// function doStuff ({rating: 4,
//   price: 2153}) {
//   console.log(price)
//   console.log(rating)
//   }

// const { descr, rating, price } = apartment;

// console.log(rating, price);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const result = [];

//   for (const product of products) {
//     result.push(product[propName]);
//   }

//   return result;
// }

// console.log(getAllPropValues("price"));

// function getAllPropValues(propName) {
//   const keys = Object.keys(products[0]);
//   const result = [];
//   for (const key of keys) {
//     if (key === propName) {
//       for (const product of products) {
//         result.push(product.prop);
//       }
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues("price"));
// const keys = Object.keys(products[0]);
// console.log(keys);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// const keys = Object.keys(products[0]);
// // Change code below this line
// console.log(keys);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Kiwi";

// const arr = [];

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     arr.push(key);
//   }
// }

// console.log(dog);
// console.log(arr);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const newObj = Object.create({ ...apartment });

// console.log(newObj);
// const {
//   price,
//   rating,
//   owner: { name },
//   tags,
// } = apartment;

// // console.log(price);

// price = 5000;
// rating = 4.7;
// name = "Henry Sibola";
// tags.push("trusted");

// console.table(apartment);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   location: {
//     country: "Ukraine",
//     city: "Poltava",
//   },
// };

// const tag = apartment["imgUrl"];
// // const tag = apartment.imgUrl;

// console.log(tag);
// const userInfo = {
//   name: "Vasya",
//   age: 30,
//   showInfo() {
//     console.log(`${this.name}`);
//   },
// };

// const user = userInfo;

// console.log(user === userInfo);

// const profile = {
//   name: "Dima Zharyy",
//   tag: "d1mkaa",
//   location: "Poltava, Ukraine",
//   avatar: false,
//   stats: {
//     folowers: 4502,
//     views: 1233,
//     likes: 133,
//   },
// };

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     stats: { folowers, views, likes },
//     location,
//     avatar,
//   } = userProfile;

//   console.log(name, tag, folowers);
// };

// showProfileInfo(profile);

// const minMaxNumbers = {
//   max(array) {
//     return Math.max(...array);
//   },
//   min(array) {
//     return Math.min(...array);
//   },
// };

// console.log(Number);

// const numbers = [2342, 242, 34, 11, 1, 4, 555];

// const findMaxNumber = function (array) {
//   return Math.max(...array);
// };

// console.log(findMaxNumber(numbers));

// const profile = {
//   name: "Dima Zharyy",
//   tag: "d1mkaa",
//   location: "Poltava, Ukraine",
//   avatar: false,
//   stats: {
//     folowers: 4502,
//     views: 1233,
//     likes: 133,
//   },
// };

// const { name, location, ...restProps } = profile;

// console.log(restProps);

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(rgb.indexOf(green));

// console.log(a, b, c);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const ratings = Math.max(...Object.values(authors));

// console.log(ratings);
// const profile = {
//   name: "Dima Zharyy",
//   tag: "d1mkaa",
//   location: "Poltava, Ukraine",
//   avatar: false,
//   stats: {
//     folowers: 4502,
//     views: 1233,
//     likes: 133,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { folowers, views, likes },
// } = profile;
// console.log(likes);

// const playlist = {
//   name: "My super playlist",
//   rating: 5,
//   tracks: ["track 1", "track 2", "track 3"],
//   trackCount: 3,
//   // trackCount() {
//   //   let result = 0;
//   //   for (const track of this.tracks) {
//   //     result += 1;
//   //   }
//   //   return console.log(result);
//   // },
// };

// const { name, rating, tracks, trackCount: tr, someProp = false } = playlist;

// console.log(`In ${name} are ${tr} tracks`);
// console.log(name, rating, tr, tracks, someProp);
// console.table(playlist);
// playlist.trackCount();

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };

// console.log(c);

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// const numbers = [1, 12, 4, 52, 354];

// const a = [...numbers];

// console.log(a === numbers);

// const numbersWithKeys = [
//   { first: 1 },
//   { second: 12 },
//   { third: 4 },
//   { fourth: 52 },
//   { fifth: 354 },
// ];

// const b = [...numbersWithKeys];

// console.log(b[0] === numbersWithKeys[0]);
// console.log(b === numbersWithKeys);

// console.log(Math.min(...numbers));

// const numbers = [1, 12, 4, 52, 354];

// const letters = ["a", "s", "a", "s"];

// // const newArr = numbers.concat(letters);
// const newArr = [...numbers, ...letters];

// console.log(newArr);
