"use strict";

// function queueTime(customers, n) {
//   let result = 0;

//   if (customers.length <= n) {
//     return Math.max(...customers);
//   }

//   if (customers.length === 0) {
//     return result;
//   }

//   if (n === 1) {
//     for (const customer of customers) {
//       result += customer;
//     }
//     return result;
//   }
// }

// const queue = [1, 2, 3, 4, 5];
// const tills = 1;

// console.log(queueTime(queue, tills));

// function alphabetPosition(text) {
//   const arr_en = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   const stringArr = [...text];
//   const result = [];

//   for (const item_1 of stringArr) {
//     for (const item_2 of arr_en) {
//       if (item_1.toLowerCase() === item_2) {
//         result.push(arr_en.indexOf(item_2 + 1));
//       }
//     }
//   }

//   return result.join(" ");
// }

// console.log(alphabetPosition("The only way"));

// const arr_en = [
//   "none",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// const arr_num = [];
// const arr = ["a", "t", "t", "g", "f"];

// for (let i = 1; i < arr_en.length; i += 1) {
//   arr_num.push(i);
// }

// function getMiddle(s) {
//   const stringArr = s.split("");
//   const stringLength = s.length;
//   const evenMiddle = stringArr
//     .slice(s.length / 2 - 1, s.length / 2 + 1)
//     .join("");
//   const oddMiddle = s[Math.floor(s.length / 2)];

//   return stringLength % 2 === 0 ? evenMiddle : oddMiddle;
// }

// console.log(getMiddle(""));
