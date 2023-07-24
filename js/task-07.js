const inputEl = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text")
const min = 16;
const max = 96;

spanEl.style.fontSize = `${parseInt(inputEl.value)}px`


inputEl.addEventListener("input", (event) => {
    const fontSize = parseInt(event.currentTarget.value);
    console.log(fontSize)
    if (fontSize >= min && fontSize <= max) {
        spanEl.style.fontSize = fontSize + "px";
        console.log("Font size set to " + fontSize + "px");
    }
});