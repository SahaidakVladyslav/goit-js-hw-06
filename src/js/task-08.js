
const formEl = document.querySelector(".login-form");
const defaultFromFunction = () => {
    event.preventDefault();
    const { email, password } = formEl.elements
    const dataForm = {
        email: email.value,
        password: password.value,
    }
    email.value === "" || password.value === "" ? alert("did u forget somethink?") : (console.log(dataForm), formEl.reset());

}
formEl.addEventListener("submit", defaultFromFunction)
