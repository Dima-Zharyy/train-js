"use strict";

// const friends = [
//   { name: "Dima", online: false },
//   { name: "Alyona", online: true },
//   { name: "Sergo", online: true },
//   { name: "Vika", online: false },
// ];

// const getFriendsByOnlineStatus = function (allFriends) {
//   const online = [];
//   const ofline = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       online.push(friend);
//     } else {
//       ofline.push(friend);
//     }
//   }
//   return console.log({
//     online,
//     ofline,
//   });
// };

// getFriendsByOnlineStatus(friends);

// const getOnlineFriends = function (allfriends) {
//   const result = [];

//   for (const friend of allfriends) {
//     if (friend.online) {
//       result.push(friend);
//     }
//   }

//   return console.log(result);
// };

// getOnlineFriends(friends);

// const getOflineFriends = function (allfriends) {
//   const result = [];

//   for (const friend of allfriends) {
//     if (!friend.online) {
//       result.push(friend);
//     }
//   }

//   return console.log(result);
// };

// getOflineFriends(friends);
// const getAllNames = function (allFriends) {
//   const result = [];
//   for (let i = 1; i < allFriends.length; i += 1) {
//     result.push(allFriends[i].name);
//   }
//   return result;
// };

// const getAllNames = function (allFriends) {
//   const result = [];
//   for (const friend of allFriends) {
//     result.push(friend.name);
//   }
//   return result;
// };

// console.log(getAllNames(friends));

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (Object.values(friend).includes(name)) {
//       return console.log("YES! We find it");
//     }
//   }

//   return console.log("Sorry! There is no friend with this name");
// };

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return console.log(`We find ${name}`);
//     }
//   }
//   return console.log(`We are not find friend with name: ${name}`);
// };

// findFriendByName(friends, "Dima");

// console.table(friends);

// const whoIsOnline = function () {
//   for (const friend of friends) {
//     if (friend.online === true) {
//       console.log(friend.name);
//     }
//   }
// };

// whoIsOnline();

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log();

// const keys = Object.keys(feedback);
// const values = Object.values(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${feedback[key]} `);
// }

// for (const value of values) {
//   console.log(value);
// }

// const entries = Object.entries(feedback);
// console.log(entries);

// const playList = {
//   name: "Limp Bizkit",
//   rating: 9.45,
//   tracks: ["Surround", "Pay", "Happy", "Milk"],
//   // trackQuantity: 4,
//   // tracksQuantity: this.tracks.length,
//   changeName(a) {
//     this.name = a;
//   },
//   updateRating(b) {
//     this.rating = b;
//   },
//   addTrack(c) {
//     this.tracks.push(c);
//     this.trackQuantity = this.tracks.length;
//   },
//   getTrackQuantity() {
//     return this.tracks.length;
//   },
// };

// playList.changeName("Okean Elzi");
// playList.updateRating(100);
// playList.addTrack("New Track !!!");

// console.log(playList);
// console.log(playList.getTrackQuantity());

// var a = 10;

// if (a % 3 === 0) {
//   const i = 10;
// }

// console.log(i);

// let a = "1" + " " + false + " " + "that is all";

// console.log(a);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// let i = 0;

// for (const book of books) {
//   i += book.rating;
// }

// let result = Number((i / books.length).toFixed(2));

// console.log(result);

// var s1 = [
//   "hoqq",
//   "bbllkw",
//   "oox",
//   "ejjuyyy",
//   "plmiis",
//   "xxxzgpsssa",
//   "xxwwkktt",
//   "znnnnfqknaz",
//   "qqquuhii",
//   "dvvvwz",
// ];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

// function mxdiflg(a1, a2) {
//   const lastIndexOfA1 = a1.length - 1;
//   const lastIndexOfA2 = a2.length - 1;
//   let randomIndexA1 = Math.round(Math.random() * lastIndexOfA1);
//   let randomIndexA2 = Math.round(Math.random() * lastIndexOfA2);

//   const randomStringA1 = a1[randomIndexA1];
//   const randomStringA2 = a1[randomIndexA2];

//   const result = randomStringA1.length - randomStringA2.length;

//   if (a1 === null || a2 === null) {
//     return -1;
//   }
//   return Math.abs(result);

//   // your code
// }

// console.log(mxdiflg(s1, s2));

// console.log(mxdiflg(s1, s2));

//
// const values = [2, 1];

// const arr = values.sort();
// const newArr = [...new Set(arr)];
// const result = newArr.join("");
// const smallest = Number(result);

// console.log(newArr);
// console.log(result);
// console.log(smallest);
// let a = 10;
// let b = -20;

// console.log(a + b);

// const word = "efEfdQssQ";

// const result = [];

// for (const letter of word) {
//   if (letter === letter.toUpperCase) {
//     result.push(word.indexOf(letter));
//   }
// }

// console.log(result);

// let s = "qwe wetgsd wefsdfsdfd we wer dsdfsdf";

// const arr = s.split(" ");
// let result = [];

// for (const word of arr) {
//   result.push(word.length);
// }

// console.log(result);

// console.log(Math.min(юююresult));

// let s1 = "asglsdfkkdglm";
// let s2 = "sdokofsqsdkfaaaa";

// let string1 = s1.split("");
// let string2 = s2.split("");

// const arr = string1.concat(string2);

// const result = new Set(arr);

// console.log(result);

// function longest(s1, s2) {
//   const arr = [s1, s2].split("");
//   arr = arr.sort();

//   for (const letter of arr) {
//   }
// }

// const filterNumbers = function (numbers, ...args) {
//   const result = [];

//   for (const number of numbers) {
//     if (args.includes(number)) {
//       result.push(number);
//     }
//   }

//   return console.log(result);
// };

// const filterNumbers = function (numbers, ...args) {
//   const result = [];

//   for (const number of numbers) {
//     for (const arg of args) {
//       if (arg === number) {
//         result.push(number);
//       }
//     }
//   }

//   return console.log(result);
// };

// filterNumbers([5, 12, 56, 84, 95, 15, 952], 56, 99, 50, 12, 20, 30, 40);

// const fn = function (...items) {
//   let result = 0;

//   for (const item of items) {
//     result += item;
//   }

//   return console.log(result);
// };

// const fn = function () {
//   const arr = Array.from(arguments);
//   let result = 0;
//   for (const item of arr) {
//     result += item;
//   }
//   return console.log(result);
// };

// fn(2, 3);

// const arrayOfNumbers = [1, 3, 6];

// const multiply = function (numbers) {
//   let sum = 0;

//   for (const number of numbers) {
//     sum += number;
//   }

//   return sum;
// };

// console.log(multiply(arrayOfNumbers));

// const title = "Top 10 benefits of React Framework";

// const slugTitle = function (sentence) {
//   // const normalizedSentence = sentence.toLowerCase();
//   // const words = normalizedSentence.split(" ");
//   // return words.join("-");

//   return sentence.toLowerCase().split(" ").join("-");
// };

// console.log(slugTitle(title));

// const name1 = "DimaZharyy";

// const reversedString = function (string) {
//   const splittedString = string.split("");
//   let reversed = "";

//   for (const letter of splittedString) {
//     letter === letter.toUpperCase()
//       ? (reversed += letter.toLowerCase())
//       : (reversed += letter.toUpperCase());
//   }

//   return reversed;
// };

// console.log(reversedString(name1));

// const numbers = [454, 6545, 848, 5141, 51, 84, 4584, 221];

// const smallestNumber = function (numbers) {
//   let seekNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < seekNumber) {
//       seekNumber = number;
//     }
//   }
//   return seekNumber;
// };

// console.log(smallestNumber(numbers));

// const listOfLogins = ["d1mkaa91", "zherj", "kabu", "litrom"];

// const findLogin = function (logins, loginToFind) {
//   for (const login of logins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} was found`;
//     }
//   }
//   return `User ${loginToFind} was not found`;
// };

// console.log(findLogin(listOfLogins, "kabu"));
// const findLogin = function (logins, loginToFind) {
//   logins.includes(loginToFind)
//     ? console.log(`User ${loginToFind} was found`)
//     : console.log(`User ${loginToFind} was not found`);
// };

// findLogin(listOfLogins, "123123u");

// const array = [1, 2, 4, 5, 6, 7, 8];

// const logItems = function (arr) {
//   for (const item of arr) {
//     console.log(item);
//   }
// };

// logItems(array);

// // const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// const random1 = [1, 5];

// const sum = function (array) {
//   let total = 0;
//   for (const number of array) {
//     total += number;
//   }
//   return total;
// };

// // console.log(sum(cart));
// console.log(sum(random1));

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

// function1(0, 1, 1, 1, 1, 1, 1);

// const function1 = function (...args) {
//   console.log(args);
// };

// function1(1, 2, 3);

// function cycle(countFrom = 1, countTo = 10, step = 1) {
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// cycle(5, 15, 2);

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

// // cards.splice(cards.length, 0, "card-6");

// cards.splice(cards.indexOf("card-2"), 1, "cards-222222");

// console.log(cards);

// const numbers1 = [5, 5, 10, 10];
// const numbers2 = [1, 1, 2, 2];

// const numbers = numbers1.concat(numbers2);
// let result = 0;

// for (const number of numbers) {
//   result += number;
// }

// console.log(numbers);
// console.log("Sum of two arrays is: ", result);

// const title = "Top 10 benefits of React Framework";
// // const titleNormalized = title.toLowerCase();
// // const splitedTitle = titleNormalized.split(" ");

// // const slugTitle = splitedTitle.join("-");

// const slug = title.toLocaleLowerCase().split(" ").join("-");
// console.log(slug);

// console.log(slugTitle);
// let splitedTitleSlug = "";

// for (const word of splitedTitle) {
//   splitedTitleSlug += `${word}-`;
// }

// const splitedTitleSlugNorm = splitedTitleSlug.slice(
//   0,
//   splitedTitleSlug.length - 1
// );

// console.log(splitedTitleSlug)

// console.log(splitedTitleSlugNorm);

// const string = "DimaZharyy";
// const splittedString = string.split("");
// let reversedString = "";

// // for (const letter of splittedString) {
// //   if (letter === letter.toLowerCase()) {
// //     reversedString += letter.toUpperCase();
// //   } else reversedString += letter.toLowerCase();
// // }

// for (const letter of splittedString) {
//   letter === letter.toLocaleLowerCase()
//     ? (reversedString += letter.toLocaleUpperCase())
//     : (reversedString += letter.toLocaleLowerCase());
// }

// console.log(reversedString);

// const friends = ["Dima", "Borya", "Fedya", "Zhora"];

// let joinedFriends = "";

// for (const friend of friends) {
//   joinedFriends += `${friend}, `;
// }

// joinedFriends = joinedFriends.slice(0, joinedFriends.length - 2);

// console.log(joinedFriends);
// const joinFriends = friends.join(", ");

// console.log(joinFriends);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log("The biggestNumber is: ", biggestNumber);

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// // for (let i = 1; i < numbers.length; i += 1) {
// //   if (numbers[i] > smallestNumber) {
// //     continue;
// //   } else {
// //     smallestNumber = numbers[i];
// //   }
// // }
// console.log(smallestNumber);

// const logins = ["d1mkaa123", "d1mkaa333", "d1mkaa111", "fedya13"];
// const loginToFind = "fedya13";

// logins.includes(loginToFind)
//   ? console.log(`login ${loginToFind} was found`)
//   : console.log("Ne naydeno");

// for (const login of logins) {
//   if (login === loginToFind) {
//     console.log(`login ${loginToFind} was found`);
//     break;
//   }

//   console.log("Posle breek eto ne vipolnitsya");
// }

// const arr = [12, 12, 43, 45];

// const newArr = arr.join(" ");

// console.log(newArr);

// const splitArr = newArr.split(" ");

// console.log(splitArr);

// const numbers = Number(splitArr[0]);
// console.log(numbers);

// const numbers = [1, 6, 8, 10, 12, 4, 1, 1, 30, 18, 1];
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     sum += numbers[i];
//   } else {
//     continue;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     continue;
//   }

//   sum += number;
// }

// console.log(sum);

// const orders = [40, 20];

// let totalSum = 0;

// for (const order of orders) {
//   totalSum += order;
// }

// // for (let i = 0; i < orders.length; i += 1) {
// //   totalSum += orders[i];
// // }

// console.log(`Total sum of your purchase is ${totalSum}`);

// const names = ["olya", "pasha", "glasha", "fedya", "petya"];

// names[15] = "qweqweqwe";
// console.log(names);

// names.push("new name KOLYA");

// console.log(names[17]);

// names.splice(5, 10);

// console.log(names);

// for (const name of names) {
//   console.log(`You see this name ${name}`);
// }

// // for (let i = 0; i < names.length; i += 1) {
//   console.log(`Name ${names[i]} installed`);
// }

// const numbers = ["one", "two", "three", "four"];
// const numberToFind = "three";

// for (const number of numbers) {
//   if (number === numberToFind) {
//     console.log(`${numberToFind} is found`);
//     break;
//   }

//   console.log(`${numberToFind} is not found`);
// }

// const girls = ["masha", "sasha", "glasha"];
// const boys = ["petya", "vasya", "fedya", "alex"];

// const boysGirls = boys.concat(girls);
// const girlsBoys = girls.concat(boys);

// console.log(boysGirls);
// console.log(girlsBoys);
// console.log("----------------");
// console.log(girls);
// console.log(boys);

// const equal = boysGirls.push("Dima") == 8;
// console.log(equal);

// console.log(boysGirls);

// const alexMasha = boysGirls.slice(3, 5);
// console.log(alexMasha);

// const lang = ["c++", "python", "js", "kotlin"];

// lang.splice(2, 2);

// console.log(lang);
// const arr = ["masha", "klasha", "vasha"];

// console.log(arr.includes("smasha"));

// const words = "Abra Cadabra";

// const newArr = words.split(" ");

// console.log(newArr);

// console.log(words);

// let firstNumber = prompt("Введите число");
// firstNumber = Number(firstNumber);
// let secondNumber = prompt("Введите степень");
// secondNumber = Number(secondNumber);

// const result = firstNumber ** secondNumber;

// console.log(result);

// const isOnline = true;
// const isFriend = true;
// const isDontDisturb = false;

// const canOpenChat = isOnline && isFriend && !isDontDisturb;

// console.log("Can I open chat with this user? ", canOpenChat);

// for (let i = 0; i < 101; i += 1) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// // 1. обьявить переменные макс, мин и результат
// const min = 1;
// const max = 5;
// let result = 0;
// // 2. сделать цикл со счетчиком от мин до макс

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   result += i;
// }

// console.log(result);

// 3. В цикле проверить остаток от деления на 2, если 0 то записать в результат, иное - пропустить

// const employees = 5;

// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (5000 - 500) + 500);
//   console.log(`Salary of ${i} employee is - ${salary}`);
//   totalSalary += salary;
// }

// console.log(`Total salary of our employees is - ${totalSalary}`);

// for (let i = 29; i > 0; i -= 2) {
//   console.log(i);
// }

// const option = 1;
// let message;

// switch (option) {
//   case 1:
//     message = "You can take your order tomorrow after 12:00 in our office";
//     break;

//   case 2:
//     message = "Courier bring your order tomorrow from 9:00 to 18:00";
//     break;

//   case 3:
//     message = "Your order will be send today";
//     break;

//   default:
//     message = "Manager recalls you later";
// }

// console.log(option);

// const totalSpent = 1000;
// let payment = 500;
// let discount;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   console.log(`You are the Bronze partner with discount ${discount * 100}%`);
// } else if (totalSpent > 1000 && totalSpent <= 5000) {
//   discount = 0.05;
//   console.log(`You are the Silver partner with discount ${discount * 100}%`);
// } else if (totalSpent > 5000) {
//   discount = 0.1;
//   console.log(`You are the Gold partner with discount ${discount * 100}%`);
// } else {
//   discount = 0;
//   console.log(`You are not partner and your discount is ${discount * 100}%`);
// }

// if (totalSpent >= 100) {
//   console.log(
//     `We are arranging your purchase with total sum of ${
//       payment - payment * discount
//     } at discount ${discount * 100}%`
//   );
// } else {
//   console.log(`We are arranging your purchase with total sum of ${payment}`);
// }

// let balance = 10000;
// const payment = 52000;

// console.log(
//   `Overall sum of your purchase is ${payment}. Checking your balance...`
// );

// if (balance >= payment) {
//   balance = balance - payment;
//   console.log(`Purchase is done, your balance is ${balance}`);
//   console.log("Purchase is complete");
// } else {
//   console.log("Sorry but your funds is not enough for this order!");
// }

// const subscription = "base";

// console.log(
//   `User have right subscription so enter is avaliable `,
//   subscription === "pro" || subscription === "vip"
// );

// const x1 = 10;
// const x2 = 20;
// let userNumber = prompt("Enter some number");
// userNumber = Number(userNumber);

// console.log(`Number ${userNumber} includes before ${x1}`, userNumber < x1);

// console.log(`Number ${userNumber} includes after ${x2}`, userNumber > x2);

// console.log(
//   `Number ${userNumber} includes from ${x1} to ${x2} `,
//   userNumber >= x1 && userNumber <= x2
// );

// console.log(
//   `Number ${userNumber} includes before ${x1} or after ${x2} `,
//   userNumber < x1 || userNumber > x2
// );
// const firstName = "Mary";
// const lastName = "Black";
// const hotel = "Ritz";
// const room = "5";

// const message = `Guest ${firstName} ${lastName} settled in ${hotel} room number ${room}`;
// const normalizedMessage = message.toLocaleLowerCase();
// console.log(normalizedMessage);

// const message =
//   "Guest" +
//   " " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "settle" +
//   " " +
//   "in" +
//   " " +
//   hotel +
//   " " +
//   "room number" +
//   " " +
//   room;
// console.log(message);
// const min = 10;
// const max = 30;

// const result = Math.random() * (max - min) + min;
// const roundResult = Math.round(result);

// console.log(roundResult);

// alert("Я JavaScript");

// const num = prompt("Введите число");

// const grade = prompt("Введите степень");

// const result = num ** grade;

// console.log(`${num} в ${grade} степени =`, result);

// let arr = [2, 3, 4, 5];
// let result = 1;
// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// console.log(result);

/* let string = "";
cnt = 5;
while (cnt--) {
  string += "*";
  console.log(string);
} */

/* let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum / arr.length); */

/* let arr = [1, 2, 3];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i] * arr[i];
}
console.log(sum);
 */
/* let arr = [10, 15, 12, 0, 13, 2, 1, 6, 5, 8, 5, 22];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    console.log("Есть");
    break
  }
} */

/* let arr = [10, 15, 12, 0, 13, 2, 1, 6, 13, 8, 5, 22];

for (i = 0; i < arr.length - 1; i++) {
  if (arr[i] > 0 && arr[i] < 10) continue;

  console.log(arr[i]);
}
 */
/* let arr = [];

for (i = 0; i < 10; i++) {
  arr[i] = Math.random().toFixed(2);
  if (arr[i] === "0.00" || arr[i] === "1.00") continue;
}
console.log(arr); */

/* cycle: for (let num = 0; num < 3; num++) {
  for (let size = 0; size < 4; size++) {
    if (size === 3) break cycle;
    console.log(size);
  }
} */
/* let num = 0;
while (num < 3) {
  console.log(`Число: ${num}`);
  num++;
} */

/* for (i = 1; i <= 10; i++) {
  console.log(i);
} */

/* const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray); */
/* let num = +prompt("Vvedite 4islo");

next: for (i = 2; i <= num; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) continue next;
  }
  console.log(i);
} */

/* let num;
do {
  num = prompt("vvedite 4islo", 0);
} while (num <= 100 && num);
 */
/* for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

/* let i = 0;
while (i < 3) {
  console.log(`number ${i}`);
  i++;
} */

/* let login = prompt("Vvedite login", "");
let password;

if (login === "Admin") {
  password = prompt("Vvedite password", "");

  if (password === "Ya glavniy") {
    alert("Zdravstvuyte");
  } else if (password === null) {
    alert("Otemeneno");
  } else {
    alert("Neverniy parol");
  }
} else if (login === null || login === "") {
  alert("Otemeneno");
} else {
  alert("Ya vas ne znayu");
} */

/* let result = 1 && 8 && 3;
alert(result); */

/* let login = prompt("Vvedite login", "");
login == "Sotrudnik"
  ? alert("Privet")
  : login == "Director"
  ? alert("Zdravstvuyte")
  : login == ""
  ? alert("Net logina")
  : alert("Login ne nayden"); */

/* let a = 1;
let b = 2;

let result = a + b < 4 ? "Malo" : "Mnogo";
alert(result);
 */
/* let writeNumber = prompt("Введите число", "");
if (writeNumber > 0) {
  alert("1");
} else if (writeNumber < 0) {
  alert("-1");
} else {
  alert("0");
}
 */
/* let admin;
let name;
name = "Джон";
admin = name;
alert(admin);
let ourPlanetName;
let currentUserName; */

/* II глава "Грокаем алгоритмы"

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  let size = array.length;
  let newArr = [];
  for (i = 0; i < size; i += 1) {
    let smallest = findSmallest(array);
    newArr.push(array[smallest]);
    array.splice(smallest, 1);
  }
  return newArr;
};
const numbers = [25, 15, 16, 5, 6, 9, 2, 18, 6, 13];

selectionSort(numbers);
console.log(selectionSort(numbers)); */
