const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients");
// const items = markup(ingredients); -_-   

function markup(element) {
  return element.map(item => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = item;
    return liEl;
  })
};

listEl.append(...markup(ingredients));