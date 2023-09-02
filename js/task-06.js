const validatorInput = document.querySelector('#validation-input');

validatorInput.addEventListener('blur', borderChange);

function borderChange(event) {
    const numberOfSymbols = validatorInput.dataset.length;
    const inputContent = validatorInput.value.length;
    if (inputContent === Number(numberOfSymbols)) {
        validatorInput.classList.remove('invalid');
        validatorInput.classList.add('valid');
    } else {
        validatorInput.classList.remove('valid');
        validatorInput.classList.add('invalid');
    }
};