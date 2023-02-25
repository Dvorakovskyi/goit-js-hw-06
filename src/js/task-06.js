const inputEl = document.querySelector('#validation-input');
// const handleInput = () => {
//     if (inputEl.value === inputEl.dataset.length) {

//     }
// };
// console.log(inputEl.dataset.length);


inputEl.style.outline = '2px solid #bdbdbd';

// inputEl.addEventListener('focus', (event) => {
//     event.target.style.outline = '2px solid #bdbdbd';
// })

inputEl.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === Number(event.target.dataset.length)) {
        // event.target.style.borderColor = '#4caf50';
        inputEl.classList.toggle('valid');
    } else inputEl.classList.toggle('invalid');
    // } else event.target.style.borderColor = '#f44336'
})