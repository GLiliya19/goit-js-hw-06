const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitLog);

function submitLog(event) {
    event.preventDefault();

    const elementsOfForm = event.currentTarget.elements;

    const emailForm = elementsOfForm.email.value;

    const passwordForm = elementsOfForm.password.value;

    if (emailForm === "" || passwordForm === "") {
        alert("Fill all the windows!");
        return;
    } else {
        const dataForm = {
            emailForm,
            passwordForm,
        }
        console.log(dataForm);
        loginForm.reset();
    }
}
