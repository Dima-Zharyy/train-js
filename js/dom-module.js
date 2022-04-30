// const paragraph = document.querySelector('p');

// console.log(paragraph);

// const ulLinks = document.querySelectorAll('li');
// console.log(ulLinks);
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.class = 'menu-item-1';
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains('red')); // true

// text.classList.remove('big');
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add('new-class');
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add('a', 'b', 'c');
// console.log(text.classList);

// text.classList.toggle('is-hidden'); // will add is-hidden class
// text.classList.toggle('is-hidden'); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

// const title = document.createElement('h1');
// title.textContent = 'This is my first created element';
// listWithId.before(title);
// document.body.style.backgroundColor = 'teal';
// title.remove();

const paragraph = document.querySelector('p');

console.log(paragraph);

const ulLinks = document.querySelectorAll('li');
console.log(ulLinks);