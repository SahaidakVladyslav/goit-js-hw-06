function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBox = (quantity) => {
  let box = document.createElement("div")
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = "30px"
  box.style.height = "30px"
  box.style.marginTop = "5px";
  console.log(box)
  boxesEl.append(box)
}


const generalDivEl = document.querySelector("#controls");
const childrenDevEl = generalDivEl.children;
const boxesEl = document.querySelector("#boxes")


childrenDevEl[1].addEventListener("click", () => {
  console.log(`We create for you ${childrenDevEl[0].value} boxses`)
  for (let i = 0; i < childrenDevEl[0].value; i += 1) {
    createBox(childrenDevEl[0].value)
  }
})
