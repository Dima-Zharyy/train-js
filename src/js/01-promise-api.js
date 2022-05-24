/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve('Promise is done correctly');
    } else {
      reject('Promise rejected');
    }
  }, 2000);
});
function onRejected(error) {
  console.log(`❌ ${error}`);
}

function onResolve(result) {
  console.log(`✅ ${result}`);
}

// promise.then(onResolve).catch(onRejected);

//  * Цепочки промисов (chaining)

promise
  .then(onResolve)
  .then(result => {
    console.log(result);
    return 10;
  })
  .then(x => console.log(x))
  .catch(error => console.log(error))
  .finally(() => console.log('Я выполнюсь в любом случае'));
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

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// // promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

// /*
//  * Цепочки промисов (chaining)
//  * Promise.prototype.catch(error)
//  * Promise.prototype.finally()
//  */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));
