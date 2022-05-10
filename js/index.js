function createHeader() {
  return `<header class="header">
    <h1 class="header__title">Trainerz</h1>
    <div class="actions">
    <button type="button">Google</button>
    <button type="button">App Store</button>
    </div>
  </header>
 `;
}

function createSection() {
  return `
  <section class="hero">
  <h2 class="hero__title">Start to workout</h2>
  <p class="hero__text">
    This is a template Figma file, turned into code using Anima. Learn more at
    AnimaApp.com
  </p>
  <button type="button" class="">Get started</button>
  <img src="" alt="" width="50px" height="50px" />
</section>
`;
}

const wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentHTML('afterbegin', createHeader());
wrapper.insertAdjacentHTML('beforeend', createSection());


class SiteConstructor