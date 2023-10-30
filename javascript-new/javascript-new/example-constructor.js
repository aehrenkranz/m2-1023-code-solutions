function ExampleConstructor() {}

console.log(
  'ExampleConstructor prototype property:',
  ExampleConstructor.prototype
);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);
const ex1 = new ExampleConstructor();
console.log('ex1', ex1);
const ex2 = ex1 instanceof ExampleConstructor;
console.log('ex1 instanceof ExampleConstructor', ex2);
