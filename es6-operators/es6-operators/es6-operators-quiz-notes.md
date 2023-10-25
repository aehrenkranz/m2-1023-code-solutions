# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  they compare two operands and return the first falsy value
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  it stops the comparison upon reaching the first falsy value
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  returns right side operand when left hand side is null/undefined. lets you consider more values
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  condition followed by question mark, then expression to execute if condition is truthy, then colon, then expression if condition is falsy
- What is the `?.` (optional chaining) operator? When would you use it?
  same as '.' but checks if there are any null/undefined, and then short circuits if so. Useful for calling a method that might not exist
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  sort of a placeholder. for an object literal enumerates the properties of an object and adds the key-value pairs to the object being created
- What data types can be spread into an array? Into an object?
  iterable values for an array, primitives for objects
- How does spread syntax differ from rest syntax?
  rest syntax collects multiple elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
