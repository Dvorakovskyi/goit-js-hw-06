function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numbersEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');


const createBoxes = (amount) => {
  amount = numbersEl.value;
  const arrayBoxes = [];
  let defaultWidth = 30;
  let defaultHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const hexColor = getRandomHexColor();
    box.style.backgroundColor = hexColor;
    box.style.width = `${defaultWidth}px`;
    box.style.height = `${defaultHeight}px`;
    defaultWidth += 10;
    defaultHeight += 10;
    arrayBoxes.push(box);
  }

  boxesEl.append(...arrayBoxes);
}

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
}

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);