const heading = document.querySelector('h1');
function handleCountdown() {
  if (heading.textContent === '1') {
    heading.textContent = '~Earth Beeeelooowww Us~';
    return;
  }
  if (heading.textContent === '~Earth Beeeelooowww Us~') {
    const intervalID = setInterval(handleCountdown, 1000);
    clearInterval(intervalID);
    return;
  }
  heading.textContent = Number(heading.textContent) - 1;
}
setInterval(handleCountdown, 1000);
