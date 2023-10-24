const heading = document.querySelector('h1');
function changeText() {
  heading.textContent = 'Hello There';
}
setTimeout(changeText, 2000);
