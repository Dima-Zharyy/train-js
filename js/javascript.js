"use strict";

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

// cards.splice(cards.length, 0, "card-6");

cards.splice(cards.indexOf("card-2"), 1, "cards-222222");

console.log(cards);

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
