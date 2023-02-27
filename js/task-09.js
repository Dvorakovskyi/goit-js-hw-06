function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const changeColorBtnEl = document.querySelector('.change-color');

changeColorBtnEl.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  colorEl.textContent = hexColor;
});
