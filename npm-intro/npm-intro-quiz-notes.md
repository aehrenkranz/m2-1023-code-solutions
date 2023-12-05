# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  -node package manager, or hub of reusable code in the form of packages
- What is a package?
  -bits of reusable code
- What are some other popular package managers?
  -dpkg, entropy
- How can you create a `package.json` with `npm`?
  -npm init --yes
- What is a dependency and how do you add one to a package?
  -packages that are required for another to function. They are added with npm install
- What happens when you add a dependency to a package with `npm`?
  -it gets added to the package.json file, as well as node_modules folder
- What is a devDependency and how do you add one to a package?
  -package installed in a directory, but not transitively. they're installed the same way
- How do you define and run `npm` scripts? Why are these useful?
  -you define them by adding them to package.json, and run them in the terminal. Sueful for sharing command development commands

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
