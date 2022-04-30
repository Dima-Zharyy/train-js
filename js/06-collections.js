const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// const option = colorPickerOptions[0];

// const btnEl = document.createElement('button');
// btnEl.type = 'button';
// btnEl.textContent = option.label;
// btnEl.style.color = option.color;
// console.log(btnEl);

const colorPickerEl = document.querySelector('.js-color-picker');

const createButtons = function (options, target) {
  const newElements = options.map(option => {
    const btnEl = document.createElement('button');
    btnEl.type = 'button';
    btnEl.classList.add('color-picker__option');
    btnEl.textContent = option.label;
    btnEl.style.backgroundColor = option.color;
    return btnEl;
  });
  target.append(...newElements);
};

createButtons(colorPickerOptions, colorPickerEl);

// const newElements = colorPickerOptions.map(item => {
//   const btnEl = document.createElement('button');
//   btnEl.type = 'button';
//   btnEl.classList.add('color-picker__option');
//   btnEl.textContent = item.label;
//   btnEl.style.backgroundColor = item.color;
//   return btnEl;
// });

// console.log(newElements);

// const colorPickerEl = document.querySelector('.js-color-picker');

// colorPickerEl.append(...newElements);
