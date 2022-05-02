/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

const onTargetBtnClick = () => {
  console.log('Click on the target button');
};

// targetBtn.addEventListener('click', onTargetBtnClick);
addListenerBtn.addEventListener('click', () => {
  targetBtn.addEventListener('click', onTargetBtnClick);
  console.log('Added Event listener to the target button');
});
removeListenerBtn.addEventListener('click', () => {
  targetBtn.removeEventListener('click', onTargetBtnClick);
  console.log('Removed Event listener from the traget button');
});

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
// addListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Вешаю слушателя события на целевую кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Снимаю слушателя события с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('Клик по целевой кнопке');
// }
