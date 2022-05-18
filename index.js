// ----------------Palindrome--------------------

const example_1 = 'racecar';
const example_2 = 'table';

function isPalindrome(str) {
  const strNorm = str.toLowerCase();
  const result =
    strNorm === strNorm.split('').reverse().join('') ? true : false;
  console.log(result);
}

isPalindrome(example_1);
isPalindrome(example_2);

// ----------------FizzBuzz--------------------

function fizzBuzz(num) {
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(30);

// ----------------Anagram--------------------

function isAnagram(str1, str2) {
  const str1Norm = str1.toLowerCase();
  const str2Norm = str2.toLowerCase();
  const result1 = str1Norm.split('').sort().join('');
  const result2 = str2Norm.split('').sort().join('');
  console.log(result1 === result2);
}

isAnagram('finder', 'Friend');
isAnagram('hello', 'bye');

// ----------------Find vowels--------------------
const vowels = ['a', 'e', 'i', 'o', 'u'];

function howManyVowels(str) {
  const strNorm = str.toLowerCase();
  const filterVowels = strNorm
    .split('')
    .filter(letter => vowels.includes(letter));

  console.log(filterVowels.length);
}

howManyVowels('qwerty');
howManyVowels('hello');
howManyVowels('why');
howManyVowels('aaaaar');
