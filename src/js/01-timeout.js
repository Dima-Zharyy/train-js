import '../css/common.css';

const message1 = 'First console.log';
const message2 = 'Second console.log';
const message3 = 'Third console.log';
const message4 = 'Fourth console.log';

function logger(time) {
  console.log(`Log with interval ${time}`);
}

const logTimerId = setTimeout(logger, 2000, 2000);

console.log(logTimerId);

// setInterval(() => {
//   console.log(message1);
// }, 1000);
// setInterval(() => {
//   console.log(message2);
// }, 2000);
// setInterval(() => {
//   console.log(message3);
// }, 3000);
// setInterval(() => {
//   console.log(message4);
// }, 4000);

// setTimeout(() => {
//   console.log(message2);
// }, 2000);

// setTimeout(() => {
//   console.log(message3);
// }, 1000);

// console.log(message4);

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
//
//
//
//

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const logger = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }
