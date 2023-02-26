const inputEl = document.querySelector('#validation-input');
inputEl.style.outline = '2px solid #bdbdbd';

inputEl.addEventListener('blur', (event) => {
    if (event.target.value.trim().length === Number(event.target.dataset.length)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    } else event.target.classList.add('invalid');
})