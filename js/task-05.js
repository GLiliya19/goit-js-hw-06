const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const inputText = event => {
    if (
        !event.currentTarget.value.length || event.currentTarget.value.trim() === ''
    ) {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
    }
};

input.addEventListener('input', inputText);