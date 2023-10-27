console.log('Ascending order');
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((element) => {
  console.log(element);
});

console.log('reversed');
values.forEach((element, index, array) => {
  let i = values.length - 1;
  const rev = i - index;
  console.log(array[rev]);
  i--;
});
