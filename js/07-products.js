import products from './data/products.js';

console.log(products);

// const product = {
//   name: 'Servo Privodi',
//   description: 'lorem lorem lorem',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const productTitleEl = document.createElement('h2');
// productTitleEl.classList.add('product__name');
// productTitleEl.textContent = product.name;

// const productDescrEl = document.createElement('p');
// productDescrEl.classList.add('product__descr');
// productDescrEl.textContent = product.description;

// const productPriceEl = document.createElement('p');
// productPriceEl.classList.add('product__price');
// productPriceEl.textContent = `Price: ${product.price} credits`;

// productEl.append(productTitleEl, productDescrEl, productPriceEl);

// console.log(productEl);

const createProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const productTitleEl = document.createElement('h2');
  productTitleEl.classList.add('product__name');
  productTitleEl.textContent = name;

  const productDescrEl = document.createElement('p');
  productDescrEl.classList.add('product__descr');
  productDescrEl.textContent = description;

  const productPriceEl = document.createElement('p');
  productPriceEl.classList.add('product__price');
  productPriceEl.textContent = `Price: ${price} credits`;

  productEl.append(productTitleEl, productDescrEl, productPriceEl);

  return productEl;
};

console.log(createProductCard(products[1]));

const elements = products.map(createProductCard);

console.log(elements);

const productsContainerEl = document.querySelector('.js-products');

productsContainerEl.append(...elements);
