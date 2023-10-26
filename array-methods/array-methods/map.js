const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const sheet1 = prices.map((element) => ({
  price: element,
  salePrice: element / 2,
}));
console.log('price/sale price:', sheet1);

const sheet2 = prices.map((element) => {
  const x = Math.round(element * 100) / 100;
  return '$' + x.toFixed(2);
});
console.log('formatted prices:', sheet2);
