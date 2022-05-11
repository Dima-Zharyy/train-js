/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(img =>
  img.addEventListener('load', onImageLoaded, { once: true }),
);

function onImageLoaded(event) {
  console.log('Img loaded');
  event.target.classList.add('appear');
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

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach(image => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(evt) {
//   console.log('Картинка загрузилась');
//   evt.target.classList.add('appear');
// }
