"use strict";

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

const totalSpent = 1000;
let payment = 500;
let discount;

if (totalSpent >= 100 && totalSpent <= 1000) {
  discount = 0.02;
  console.log(`You are the Bronze partner with discount ${discount * 100}%`);
} else if (totalSpent > 1000 && totalSpent <= 5000) {
  discount = 0.05;
  console.log(`You are the Silver partner with discount ${discount * 100}%`);
} else if (totalSpent > 5000) {
  discount = 0.1;
  console.log(`You are the Gold partner with discount ${discount * 100}%`);
} else {
  discount = 0;
  console.log(`You are not partner and your discount is ${discount * 100}%`);
}

if (totalSpent >= 100) {
  console.log(
    `We are arranging your purchase with total sum of ${
      payment - payment * discount
    } at discount ${discount * 100}%`
  );
} else {
  console.log(`We are arranging your purchase with total sum of ${payment}`);
}

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
