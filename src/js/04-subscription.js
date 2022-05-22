import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  subscribeBtn: document.querySelector('[data-subscribe]'),
  quitBtn: document.querySelector('[data-dismiss]'),
};

refs.quitBtn.addEventListener('click', onQuitBtn);

const myModal = new BSN.Modal('#subscription-modal');

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let modalCounter = 0;
let hasSubscribed = false;

const interval = setInterval(() => {
  if (modalCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    clearInterval(interval);
    return;
  }
  myModal.show();

  modalCounter += 1;
}, PROMPT_DELAY);

function onQuitBtn() {
  myModal.hide();
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
//
//
//
//
//
//
//
//

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal');

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
