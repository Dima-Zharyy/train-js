// alert("Я JavaScript");

/* for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

let i = 0;
while (i < 3) {
  console.log(`number ${i}`);
  i++;
}

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
