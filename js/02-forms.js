/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const dataObj = {};

  formData.forEach((value, name) => {
    dataObj[name] = value;
  });

  console.log(dataObj);
}

//   console.log('Form submitted');

//   const formElements = event.currentTarget.elements;
//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   const subscriptionType = formElements.subscription.value;

//   const formData = {
//     mail,
//     password,
//     subscriptionType,
//   };

//   console.log(formData);

//   console.log(`mail: ${mail}
// password: ${password}
// subscrpiption: ${subscriptionType}`);
// }

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
//
//

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name', name);
//     console.log('onFormSubmit -> value', value);
//   });
// }
