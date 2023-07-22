const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector(".gallery");



images.forEach(element => {
  let itemEl = document.createElement("li");
  let imgEl = document.createElement("img");
  imgEl.setAttribute(`alt`, `${element.alt}`);
  imgEl.setAttribute(`src`, `${element.url}`)
  console.log(imgEl)
  itemEl.insertAdjacentHTML("afterbegin", imgEl.outerHTML)

  console.log(itemEl)
  listEl.insertAdjacentHTML("afterbegin", itemEl.outerHTML)
});


