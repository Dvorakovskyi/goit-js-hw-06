const inputEl = document.querySelector('#name-input');
const titleSpanEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
    if (event.target.value === "") {
        titleSpanEl.textContent = "Anonymous";
    } else titleSpanEl.textContent = event.target.value;
});