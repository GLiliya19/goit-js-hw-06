const btn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const whichColor = document.querySelector('.color');

btn.addEventListener('click', buttonClick);

function buttonClick() {
  bodyColor.style.backgroundColor = whichColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
