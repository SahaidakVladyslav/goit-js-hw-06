
const itemEl = document.querySelectorAll(".item");
const titleEl = document.querySelectorAll("h2");


const quantityProductsEl = number => Array.from(itemEl[number].lastElementChild.children).length;
const categoriesTextContent = number => titleEl[number].textContent;

console.log("Number of categories:", Array.from(itemEl).length);
console.log("")
console.log("Category:", categoriesTextContent(0))
console.log("Elements:", quantityProductsEl(0))
console.log("")
console.log("Category:", categoriesTextContent(1))
console.log("Elements:", quantityProductsEl(1))
console.log("")
console.log("Category:", categoriesTextContent(2))
console.log("Elements:", quantityProductsEl(2))
