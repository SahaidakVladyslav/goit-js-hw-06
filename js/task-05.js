const inputEl = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output")

const outputFunction = () => {
    if (inputEl.value === "") {
        spanEl.textContent = "Anonymous"
    }
    else {
        spanEl.textContent = event.currentTarget.value
    }

}

inputEl.addEventListener("input", outputFunction)

