import { subtract } from 'lodash';
import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onSubmit);
// refs.textarea.addEventListener('input', throttle(onInput, 1000));
refs.form.addEventListener('input', throttle(onInput, 1000));

populateTextarea();

function onSubmit(event) {
  event.preventDefault();
  const submitData = new FormData(event.currentTarget);
  const myData = {};

  submitData.forEach((value, name) => {
    myData[name] = value;
  });
  event.currentTarget.reset();
  console.log(myData);
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  console.log(parsedData);

  if (!parsedData) return;

  if (parsedData.name) {
    refs.form.elements.name.value = parsedData.name;
  }

  if (parsedData.message) {
    refs.form.elements.message.value = parsedData.message;
  }
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

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextarea();

// /*
//  * - Останавливаем поведение по умолчанию
//  * - Убираем сообщение из хранилища
//  * - Очищаем форму
//  */
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// /*
//  * - Получаем значение поля
//  * - Сохраняем его в хранилище
//  * - Можно добавить throttle
//  */
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// /*
//  * - Получаем значение из хранилища
//  * - Если там что-то было, обновляем DOM
//  */
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

// // Домой
// // сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// // const formData = {};

// // refs.form.addEventListener('input', e => {
// //   // console.log(e.target.name);
// //   // console.log(e.target.value);

// //   formData[e.target.name] = e.target.value;

// //   console.log(formData);
// // });
