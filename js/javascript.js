const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  let size = array.length;
  let newArr = [];
  for (i = 0; i < size; i += 1) {
    let smallest = findSmallest(array);
    newArr.push(array[smallest]);
    array.splice(smallest, 1);
  }
  return newArr;
};
const numbers = [25, 15, 16, 5, 6, 9, 2, 18, 6, 13];

selectionSort(numbers);
console.log(selectionSort(numbers));
