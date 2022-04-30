const navEl = document.querySelector('.site-nav');

const firstNavItem = navEl.firstElementChild;
console.log(firstNavItem);

const secondNavItem = firstNavItem.nextElementSibling;
console.log(secondNavItem);

const thirdNavItem = navEl.lastElementChild;
console.log(thirdNavItem);
