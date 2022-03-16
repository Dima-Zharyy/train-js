"use strict";

const userInfo = {
  name: "Vasya",
  age: 30,
  showInfo() {
    console.log(`${this.name}`);
  },
};

const user = userInfo;

console.log(user === userInfo);

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
