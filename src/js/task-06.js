const inputEl = document.querySelector("#validation-input");
const callBackBorderColors = (event) => {
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.replace("invalid", "valid")
    } else {
        inputEl.classList.replace("valid", "invalid")
    }
}


inputEl.classList.add("invalid")


inputEl.addEventListener("blur", callBackBorderColors)


