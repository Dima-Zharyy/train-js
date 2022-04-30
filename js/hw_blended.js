// // Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// // Користувач обирає конкретний ресторан і отримує список доступних пунктів
// // в меню для замовлення із вказанням їх вартості.
// // Користувач обирає своє замовлення, після чого має отримати його підтвердження
// //  та основну інформацію: "що замовив, вартість та час доставки".

// const restaurants = [
//   {
//     order: [],
//     brand: 'KFC',
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: 'mcDonalds',
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: 'Burger King',
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// const services = {
//   showMenu(brand) {
//     const chosenBrand = restaurants.find(
//       restaurant => restaurant.brand === brand
//     );
//     const chosenBrandMenuEntries = Object.entries(chosenBrand.menu);
//     const menuResult = chosenBrandMenuEntries.map(
//       element => `${element[0]} - ${element[1]}`
//     );

//     alert(`Here is menu of ${brand}:
//     ${menuResult}`);
//   },
//   getMenu(brand) {
//     const chosenBrand = restaurants.find(
//       restaurant => restaurant.brand === brand
//     );

//     const menuString = Object.entries(chosenBrand.menu).join(' || ');

//     return menuString;
//   },
//   addOrder(item, quantity) {
//     const randomId = Date.now();
//     const findPrice = restaurants.find(
//       restaurant => restaurant.brand === torpedaDelivery.chosenRestaurant
//     ).menu[item];
//     const userOrder = {
//       id: randomId,
//       restaurant: torpedaDelivery.chosenRestaurant,
//       details: {
//         itemOrdered: item,
//         quantityOrdered: quantity,
//         price: findPrice,
//       },
//     };
//     torpedaDelivery.order.push(userOrder);
//   },
//   confirmOrder() {
//     const sum = torpedaDelivery.order.reduce(
//       (acc, item) => (acc = item.details.quantityOrdered * item.details.price),
//       0
//     );
//     const deliveryTime = restaurants.find(
//       restaurant => restaurant.brand === torpedaDelivery.chosenRestaurant
//     ).deliveryTime;
//     const finishOrder = confirm(
//       'Please confirm your order! If you want to add more in your order, please enter Отмена'
//     );
//     if (finishOrder) {
//       alert(`Total sum of your order is: ${sum}
//       Delivery time: ${deliveryTime} `);

//       const userRest = restaurants.find(
//         restaurant => restaurant.brand === torpedaDelivery.chosenRestaurant
//       ).order;
//       const orderToCopy = [...torpedaDelivery.order];
//       userRest.push(orderToCopy);
//       torpedaDelivery.order = [];
//       torpedaDelivery.chosenRestaurant = '';
//       return;
//     }
//     alert('Ok you can choose another restaurant');
//     torpedaDelivery.chooseRestaurant();
//   },
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: '',
//   getAvailableRestaurantsList() {
//     const restaurantsList = restaurants.map(({ brand }) => `${brand}`);
//     const restaurantsListToString = restaurantsList.join(' || ');
//     // alert(`Available restaurants: ${restaurantsListToString}`);
//     return restaurantsListToString;
//   },

//   getAvailableRestaurantsData() {
//     const restaurantsList = restaurants.map(({ brand }) => brand);
//     return restaurantsList;
//   },

//   chooseRestaurant() {
//     const restList = this.getAvailableRestaurantsData();
//     const restListNormalized = restList.map(rest => rest.toLowerCase());
//     const selectedBrand = prompt(
//       `Please choose a restaurant from the list:
//        ${this.getAvailableRestaurantsList()}`
//     );
//     if (selectedBrand === null) {
//       alert('See you next time!');
//       return;
//     }

//     if (!restListNormalized.includes(selectedBrand.toLowerCase())) {
//       alert(
//         `There is no restaurant with name: ${selectedBrand}! Please try again`
//       );
//       return this.chooseRestaurant();
//     }

//     const indexOfChosenRest = restListNormalized.indexOf(
//       selectedBrand.toLowerCase()
//     );

//     this.chosenRestaurant = restList[indexOfChosenRest];
//     alert(`Ok! You chose ${this.chosenRestaurant}`);
//   },

//   chooseDishes() {
//     const menu = services.getMenu(this.chosenRestaurant);
//     alert(`Here is avaliable positions in menu: ${menu}`);

//     const positionChoice = prompt('Please type what do you want to order');

//     if (positionChoice === null) {
//       alert('Have a good day!');
//       return;
//     }

//     const positions = restaurants.find(
//       restaurant => restaurant.brand === this.chosenRestaurant
//     ).menu;
//     const keys = Object.keys(positions).map(key => key);
//     if (!keys.includes(positionChoice)) {
//       alert(
//         `There is no item in menu with name ${positionChoice}! Try again please!`
//       );
//       return this.chooseDishes();
//     }

//     const quantity = Number(
//       prompt('Please type how mmany do you want to order')
//     );

//     if (quantity === null) {
//       alert('You entered nothing! Please try again!');
//       return this.chooseDishes();
//     }

//     if (isNaN(quantity)) {
//       alert('Please enter only number! Try again');
//       return this.chooseDishes();
//     }

//     services.addOrder(positionChoice, quantity);
//     services.confirmOrder();
//   },
// };

// torpedaDelivery.chooseRestaurant();
// torpedaDelivery.chooseDishes();

// console.log(torpedaDelivery);
// console.log(restaurants);

// torpedaDelivery.chooseRestaurant();
// torpedaDelivery.chooseDishes();

// console.log(torpedaDelivery);
// console.log(restaurants);

// torpedaDelivery.chooseRestaurant();
// torpedaDelivery.chooseDishes();

// console.log(torpedaDelivery);
// console.log(restaurants);
