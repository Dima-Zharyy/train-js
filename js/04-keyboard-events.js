/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */
const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// window.addEventListener('keydown', onKeyPress); // реагирует на все кнопки
window.addEventListener('keypress', onKeyPress); // реагирует на все кроме служебных кнопок ctrl alt Shift ...
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
  console.log(event);
  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
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

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//   // console.log('event.key: ', event.key);
//   // console.log('event.code: ', event.code);

//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = '';
// }
