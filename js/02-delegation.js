/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const buttonsContainer = document.querySelector('.js-container');

buttonsContainer.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  if (event.target === event.currentTarget) return;
  // if (event.target.nodeName !== 'BUTTON') return;
  console.log('Button clicked - ', event.target);
}

const addBtnButton = document.querySelector('.js-add-btn');

addBtnButton.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
  const newBtn = document.createElement('button');
  newBtn.type = 'button';
  newBtn.textContent = `Кнопка ${
    Number(buttonsContainer.lastElementChild.textContent.slice(7)) + 1
  }`;
  buttonsContainer.appendChild(newBtn);
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   console.log(evt.target.textContent);
// }

// /*
//  * Код добавления кнопок
//  */
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }
