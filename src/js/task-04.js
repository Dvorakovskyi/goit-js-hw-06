const buttonsEl = document.querySelectorAll('#counter button');
const decrementBtnEl = buttonsEl[0];
const incrementBtnEl = buttonsEl[1];
const valueEl = document.querySelector('#value');

let counterValue = 0;
const handleDecrementBtnClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
const handleIncrementBtnClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
decrementBtnEl.addEventListener('click', handleDecrementBtnClick);
incrementBtnEl.addEventListener('click', handleIncrementBtnClick);


