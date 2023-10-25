const heading = document.querySelector('h1');
let tracker = 4;
const id = setInterval(handleCountdown, 1000);
function handleCountdown() {
  if (tracker === 1) {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(id);
  } else {
    tracker--;
    heading.textContent = tracker;
  }
}
