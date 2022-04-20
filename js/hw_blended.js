// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів
// в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження
//  та основну інформацію: "що замовив, вартість та час доставки".

const restaurants = [
  {
    order: [],
    brand: 'KFC',
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: 'mcDonalds',
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: 'Burger King',
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

const services = {
  showMenu(brand) {
    const chosenBrand = restaurants.find(
      restaurant => restaurant.brand === brand
    );
    const chosenBrandMenuEntries = Object.entries(chosenBrand.menu);
    const menuResult = chosenBrandMenuEntries.map(
      element => `${element[0]} - ${element[1]}`
    );

    alert(`Here is menu of ${brand}:
    ${menuResult}`);
  },
  getMenu(brand) {
    const chosenBrand = restaurants.find(
      restaurant => restaurant.brand === brand
    );

    return chosenBrand.menu;
  },
  addOrder(item, quantity) {},
  confirmOrder() {},
};

const torpedaDelivery = {
  order: [],
  chosenRestaurant: '',
  getAvailableRestaurants() {
    const restaurantsList = restaurants.map(({ brand }) => `${brand}`);
    const restaurantsListToString = restaurantsList.join(' || ');
    alert(`Available restaurants: ${restaurantsListToString}`);
    return restaurantsList;
  },
  chooseRestaurant() {
    const restList = this.getAvailableRestaurants();
    const restListNormalized = restList.map(rest => rest.toLowerCase().trim());
    const selectedBrand = prompt(
      `Please choose a restaurant from the list: ${restList}`
    ).trim();
    if (selectedBrand === null) {
      alert('See you next time!');
      return;
    }

    // console.log(restListNormalized);

    if (!restListNormalized.includes(selectedBrand.toLowerCase())) {
      alert(
        `There is no restaurant with name: ${selectedBrand}! Please try again`
      );
      return this.chooseRestaurant();
    }

    const indexOfChosenRest = restListNormalized.indexOf(
      selectedBrand.toLowerCase()
    );

    this.chosenRestaurant = restList[indexOfChosenRest];
    // console.log(this.chosenRestaurant);
  },
  chooseDishes() {},
};

// torpedaDelivery.chooseRestaurant();
// torpedaDelivery.getAvailableRestaurants();
// torpedaDelivery.chooseRestaurant();
