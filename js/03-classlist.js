const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//   const navEls = document.querySelector('.site-nav');
//   //  navEls.classList.add('site-nav__link--current');
//   navEls.classList.toggle('site-nav__link--current');
// });

const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);

const currentPageUrl = '/portfolio';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
linkEl.classList.add('site-nav__link--current');
