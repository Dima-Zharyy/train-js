import './css/common.css';

// 1) Render markup
// 2) Add form on display and add new elements in array

const productList = [
  {
    id: 1,
    text: 'Milk',
  },
  {
    id: 2,
    text: 'Apples',
  },
  {
    id: 3,
    text: 'Meat',
  },
  {
    id: 4,
    text: 'Bread',
  },
  {
    id: 5,
    text: 'Eggs',
  },
];

const refs = {
  todoList: document.querySelector('.list'),
  input: document.querySelector('.input'),
  submitBtn: document.querySelector('.submit'),
};

function createMarkupFromData(data) {
  return data
    .map(({ text, id }) => `<li id="${id}" class="list_item">${text}</li>`)
    .join('');
}

// console.log(
//   productList.reduce(
//     (acc, { id, text }) =>
//       acc + `<li id="${id}" class="list_item">${text}</li>`,
//     '',
//   ),
// );

function renderTodoList() {
  const markup = createMarkupFromData(productList);
  refs.todoList.insertAdjacentHTML('beforeend', markup);
}

renderTodoList();

refs.form.addEventListener('submit', onCreateTodo);

function onCreateTodo(event) {
  event.preventDefault();

  if (!refs.input.value) {
    alert('Input must be at least one letter!');
    return;
  }

  const todoText = refs.input.value;
  const todoId = productList.length + 1;
  const result = `<li id="${todoId}" class="list_item">${todoText}</li>`;

  refs.todoList.insertAdjacentHTML('beforeend', result);

  refs.input.value = '';
}
