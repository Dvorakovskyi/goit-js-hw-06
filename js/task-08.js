const formEl = document.querySelector('.login-form');
const inputEls = formEl.querySelectorAll('input');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    inputEls.forEach((input) => {
        if (input.value === '') {
            alert('Будь ласка, заповніть усі поля');
            return;
        }
    })
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email, password,
    }

    console.log(formData);

    if (email !== '' && password !== '') {
        event.currentTarget.reset();
    }

})
