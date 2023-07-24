const inputEl = document.querySelector("#validation-input");
const callBackBorderColors = (event) => {
    inputEl.classList.add("invalid")

    if (event.currentTarget.value.length === 6) {
        inputEl.classList.replace("invalid", "valid")
    } else {
        inputEl.classList.replace("valid", "invalid")
    }
}




inputEl.addEventListener("blur", callBackBorderColors)


