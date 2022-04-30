const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);

// <article class="product">
//   <h2 class="product__name">Название</h2>
//   <p class="product__descr">Описание</p>
//   <p product__pridct>Цена: 1111 кредитов</p>
// </article>;

const articleEl = document.createElement('article');
articleEl.classList.add('product');
articleEl.innerHTML = `<h2 class="product__name">Название</h2>  
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>`; // для быстрой очистки тега = ''

document.body.appendChild(articleEl);

const subtitleEl = document.createElement('h2');
subtitleEl.textContent = 'This is subtitle in the Article';
subtitleEl.classList.add('product__subtitle');

articleEl.insertAdjacentElement('afterbegin', subtitleEl); // для добавления строки разметки
