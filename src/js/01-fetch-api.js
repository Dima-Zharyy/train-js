/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  fetchPokemon(refs.formInput.value)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

// fetchPokemon(1)
//   .then(renderPokemonCard)
//   .catch(err => console.log(err));

function fetchPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response =>
    response.json(),
  );
}

function createMarkup({ name, sprites, weight, height, abilities }) {
  const abilitiesMarkup = abilities
    .map(item => {
      return `<li class="list-group-item">${item.ability.name}</li>`;
    })
    .join('');
  return `<div class="card">
  <div class="card-img-top">
    <img src="${sprites.front_default}" alt="${name}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: ${name}</h2>
    <p class="card-text">Вес: ${weight}</p>
    <p class="card-text">Рост: ${height}</p>

    <p class="card-text"><b>Умения</b></p>
    <ul class="list-group">
    ${abilitiesMarkup}
    </ul>
  </div>
</div>`;
}

function renderPokemonCard(pokemon) {
  const markup = createMarkup(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(err) {
  console.log(err);
  alert('Oops! something going wrong');
}
// import '../css/common.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
