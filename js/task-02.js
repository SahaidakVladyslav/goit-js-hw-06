const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients");
const items = markup(ingredients);

function markup(element) {
  return element.map(item => {
    return `
    <li class="item"> ${item}</li>
    `;
  })
    .join(``);
}
listEl.insertAdjacentHTML("beforeend", items)
