const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((init, add) => init + add);
const product = numbers.reduce((init, multiply) => init * multiply);
const balance = account.reduce((balance, transaction) => {
  transaction.type === 'deposit' ? balance += transaction.amount : balance -= transaction.amount;
  return balance;
}, 0);
const composite = traits.reduce((firstObj, multipleObjs) => Object.assign(firstObj, multipleObjs));

console.log('Value of sum:', sum);
console.log('Value of product:', product);
console.log('Value of balance:', balance);
console.log('Value of composite:', composite);
