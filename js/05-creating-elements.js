const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
console.log(titleEl);
titleEl.textContent = 'We have created Title';

// document.body.appendChild(titleEl);

const imgEl = document.createElement('img');
imgEl.alt = 'our picture';
imgEl.src = '../img/etc-run-main-picture.jpg';
imgEl.width = 200;
imgEl.height = 100;
console.log(imgEl);

// document.body.appendChild(imgEl);

const navEl = document.querySelector('.site-nav');
console.log(navEl);

const navLinkEl = document.createElement('a');
navLinkEl.href = '../02-properties.html';
navLinkEl.textContent = 'Ref to properties';
navLinkEl.classList.add('site-nav__link');

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imgEl);
