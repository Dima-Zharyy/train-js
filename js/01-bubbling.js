/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  inner_child: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.inner_child.addEventListener('click', onInnerchildClick);

function onParentClick(event) {
  console.log('Parent currentTarget: ', event.currentTarget);
  console.log('Parent target: ', event.target);
}

function onChildClick(event) {
  console.log('Child currentTarget: ', event.currentTarget);
  console.log('Child target: ', event.target);
}

function onInnerchildClick(event) {
  console.log('Innerchild currentTarget: ', event.currentTarget);
  console.log('Innerchild target: ', event.target);
}

//
//
//
////
////
////
////
////
////
////
////
////
////
////
////
////
//

// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   innerChild: document.querySelector('#inner-child'),
// };

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);

// function onParentClick(evt) {
//   console.log('onParentClick');
//   console.log('onParentClick -> evt.target', evt.target);
//   console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
// }

// function onChildClick(evt) {
//   console.log('onChildClick');
//   console.log('onChildClick -> evt.target', evt.target);
//   console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
// }

// function onInnerChildClick(evt) {
//   console.log('onInnerChildClick');
//   console.log('onInnerChildClick -> evt.target', evt.target);
//   console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
// }
