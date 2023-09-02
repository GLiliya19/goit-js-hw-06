const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${sizeControl.value}px`;

const sizeChange = event => {
    text.style.fontSize = `${event.currentTarget.value}px`;
};

sizeControl.addEventListener('input', sizeChange);