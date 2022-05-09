/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tags = document.querySelector('.js-tags');
// tags.addEventListener('click', onClick);
// let selectedTag = null;

// function onClick(event) {
//   if (event.target.nodeName !== 'BUTTON') return;
//   // if (event.target === event.currentTarget) return;

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }
//   // currentActiveBtn?.classList.remove('tags__btn--active');

//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn;
//   console.log(selectedTag.dataset.value);
// }

const tags = document.querySelector('.js-tags');
const selectedTags = new Set();

tags.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  if (event.target.classList.contains('tags__btn--active')) {
    selectedTags.delete(event.target.dataset.value);
  } else {
    selectedTags.add(event.target.dataset.value);
  }

  event.target.classList.toggle('tags__btn--active');

  console.log(selectedTags);
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

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

// const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains('tags__btn--active');

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle('tags__btn--active');
//   console.log(selectedTags);
// }
