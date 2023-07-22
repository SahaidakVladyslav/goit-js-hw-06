const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients")
const itemEl = document.createElement("li");

ingredients.forEach(element => {
  let mambaEl = document.createElement("li");
  mambaEl.classList.add("item")
  mambaEl.textContent = element;
  listEl.append(mambaEl)
});