const magicBtn = document.querySelector('.js-magic-btn');
magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  console.log(imageEl);
  console.log(imageEl.src);
  console.log(imageEl.alt);
  imageEl.src = '../img/etc-run-main-picture.jpg';
  console.log(imageEl.src);
  imageEl.alt = 'Ethereum Classic logo with bunch of dollars in each hand';
  console.log(imageEl.alt);
});

const imageEl = document.querySelector('.hero__image');
const heroTitle = document.querySelector('.hero__title');

// heroTitle.textContent = 'New title in document';
// imageEl.remove('src');
// console.log(imageEl.hasAttribute('src'));

const actions = document.querySelectorAll('.js-actions button');
console.log(actions[0].dataset);

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  inputEl.value = 'Initial value of input';
});

// const imageEl = document.querySelector('.hero__image');
// console.log(imageEl);
// console.log(imageEl.src);
// console.log(imageEl.alt);
// imageEl.src = '../img/etc-run-main-picture.jpg';
// console.log(imageEl.src);
// imageEl.alt = 'Ethereum Classic logo with bunch of dollars in each hand';
// console.log(imageEl.alt);
