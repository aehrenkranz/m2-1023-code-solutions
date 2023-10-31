const rightArrow = document.getElementById('arrow-right');
const leftArrow = document.getElementById('arrow-left');
const images = document.querySelectorAll('img');
const circleButtons = document.querySelectorAll('.circle');
const buttonContainer = document.querySelector('.button-container');
let currentImage = document.querySelector('.visible');
let activeButton = document.querySelector('.circle');
let intervalID = setInterval(clickRight, 3000);
function clickRight() {
  clearInterval(intervalID);
  intervalID = setInterval(clickRight, 3000);
  for (let i = 0; i < images.length; i++) {
    if (images[i] === currentImage) {
      images[i].className = '';
      circleButtons[i].innerHTML = '&#9675;';
      if (i === images.length - 1) {
        images[0].className = 'visible';
        currentImage = images[0];
        circleButtons[0].innerHTML = '&#9679;';
        activeButton = circleButtons[0];
        return;
      } else {
        images[i + 1].className = 'visible';
        currentImage = images[i + 1];
        circleButtons[i + 1].innerHTML = '&#9679;';
        activeButton = circleButtons[i + 1];
        return;
      }
    }
  }
}

function clickLeft() {
  clearInterval(intervalID);
  intervalID = setInterval(clickRight, 3000);
  for (let i = 0; i < images.length; i++) {
    if (images[i] === currentImage) {
      images[i].className = '';
      circleButtons[i].innerHTML = '&#9675;';
      if (i === 0) {
        images[images.length - 1].className = 'visible';
        currentImage = images[images.length - 1];
        circleButtons[images.length - 1].innerHTML = '&#9679;';
        activeButton = circleButtons[images.length - 1];
        return;
      } else {
        images[i - 1].className = 'visible';
        currentImage = images[i - 1];
        circleButtons[i - 1].innerHTML = '&#9679;';
        activeButton = circleButtons[images.length - 1];
        return;
      }
    }
  }
}

function circleButtonClick(event) {
  clearInterval(intervalID);
  intervalID = setInterval(clickRight, 3000);
  if (event.target.className === 'circle') {
    for (let i = 0; i < circleButtons.length; i++) {
      if (event.target === circleButtons[i]) {
        activeButton.innerHTML = '&#9675;';
        event.target.innerHTML = '&#9679;';
        activeButton = event.target;
        currentImage.className = '';
        currentImage = images[i];
        currentImage.className = 'visible';
      }
    }
  }
}

leftArrow.addEventListener('click', clickLeft);
rightArrow.addEventListener('click', clickRight);
buttonContainer.addEventListener('click', circleButtonClick);
