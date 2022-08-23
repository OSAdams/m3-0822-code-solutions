const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(value => value * 2);
const prices = numbers.map(value => `$${value.toFixed(2)}`);
const upperCased = languages.map(value => value.toUpperCase());
const firstLetters = languages.map(value => value[0]);

console.log('Value of doubled:', doubled);
console.log('Value of prices:', prices);
console.log('Value of upperCased:', upperCased);
console.log('Value of firstLetters:', firstLetters);
