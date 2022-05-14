const sizes = {
  S: 200,
  L: 300,
  M: 400,
};
class Hamburger {
  static stuffing = {
    STUFFING_SALAD: {
      type: 'STUFFING_SALAD',
      price: 300,
      ccal: 200,
    },
    STUFFING_POTATO: {
      type: 'STUFFING_POTATO',
      price: 400,
      ccal: 100,
    },
    TOPPING_MAYO: {
      type: 'TOPPING_MAYO',
      price: 300,
      ccal: 400,
    },
    TOPPING_SPICE: {
      type: 'TOPPING_SPICE',
      price: 500,
      ccal: 700,
    },
  };

  constructor() {
    this.stuffing;
  }
}

const toppingsList = document.querySelector('.js-menu-toppings');
const sizeList = document.querySelector('.js-menu-size');

// ------------------------------ Create menu ------------------------------

const dataToppings = Object.entries(Hamburger.stuffing);
const toppingsMarkup = createToppingsListMarkup(dataToppings);
toppingsList.innerHTML = toppingsMarkup;

const dataSizes = Object.entries(sizes);
const sizesMarkup = createSizesListMarkup(dataSizes);
sizeList.innerHTML = sizesMarkup;

function createToppingsListMarkup(data) {
  const markup = data
    .map(item => {
      const menuItem = item[0].split('_').join(' ');
      return `
    <li class="menu__item">${menuItem} - ${item[1].price} uah</li>
    `;
    })
    .join('');
  return markup;
}

function createSizesListMarkup(data) {
  const markup = data
    .map(item => {
      return `
    <li class="menu__item">${item[0]} - ${item[1]} uah</li>
    `;
    })
    .join('');
  return markup;
}

// ------------------------------ Add event listeners ------------------------------
const inputSize = document.querySelector('.js-input-size');
const inputAmount = document.querySelector('.js-input-amount');
const inputTopping = document.querySelector('.js-input-topping');

inputSize.addEventListener('input', onInputSize);
inputAmount.addEventListener('input', onInputAmount);
inputTopping.addEventListener('input', onInputTopping);

function onInputSize(event) {
  const textInput = event.target.value;
}
