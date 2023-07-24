function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const generalDivEl = document.querySelector("#controls");
const childrenDevEl = generalDivEl.children;
const boxesEl = document.querySelector("#boxes")

const createBox = (quantity) => {
  let quantityPx = 30;
  console.log(`We are creating for you ${childrenDevEl[0].value} boxses`)
  for (let i = 1; i <= quantity; i += 1) {
    let box = document.createElement("div")
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${quantityPx}px`
    box.style.height = `${quantityPx}px`
    box.style.margin = "10px";
    box.classList.add("stranger--box")
    boxesEl.append(box)
    quantityPx += 10;
  }
}


const destroyBoxes = () => {
  document.querySelectorAll(".stranger--box").forEach(item => item.remove())
  console.log(`We are  deleting  all boxses for you `)
}


childrenDevEl[1].addEventListener("click", () => {
  createBox(childrenDevEl[0].value)
})
childrenDevEl[2].addEventListener("click", destroyBoxes)