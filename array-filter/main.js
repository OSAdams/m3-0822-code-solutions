const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(index => index % 2 === 0);
const overFive = numbers.filter(index => index > 5);
const startsWithE = names.filter(value => value.startsWith('E'));
const haveD = names.filter(values => {
  const lcString = values.toLowerCase();
  return lcString.includes('e');
});

console.log(`Value of evenNumbers: ${evenNumbers}`);
console.log(`Value of overFive: ${overFive}`);
console.log(`Value of startsWithE: ${startsWithE}`);
console.log(`Value of haveD: ${haveD}`);
