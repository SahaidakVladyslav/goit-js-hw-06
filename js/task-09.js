function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body")
const backgroundColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  buttonEl.style.backgroundColor = bodyEl.style.backgroundColor;
}


buttonEl.addEventListener("click", backgroundColor)