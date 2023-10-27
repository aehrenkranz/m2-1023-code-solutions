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
  'Donna',
];

console.log(
  'even numbers',
  numbers.filter((element) => {
    return element % 2 === 0;
  })
);

console.log(
  'Does not contain d:',
  names.filter((element) => {
    const x = element.toLowerCase();
    return x.includes('d') ? false : element;
  })
);
