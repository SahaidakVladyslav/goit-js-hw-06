// const divEl = document.querySelector("#counter")
const decreaseBtnEl = document.querySelector('button[data-action="decrement"]')
const increaseBtnEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value")

let counterValue = 0;


const increaseFunction = () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
}

const decreaseFunction = () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

decreaseBtnEl.addEventListener("click", decreaseFunction)
increaseBtnEl.addEventListener("click", increaseFunction)