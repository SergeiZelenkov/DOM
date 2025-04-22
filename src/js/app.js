const body = document.querySelector("body");
let newUl = document.createElement("ul");

newUl.classList.add("ul");
body.append(newUl);
for (let i = 0; i < 16; i++) {
  let newLi = document.createElement("li");
  newLi.classList.add("li");
  newUl.append(newLi);
}
const allLi = document.querySelectorAll(".li");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let lastIndex = -1;

setInterval(() => {
  allLi.forEach((li) => li.classList.remove("red"));

  let randomIndex;
  do {
    randomIndex = getRandomIntInclusive(0, allLi.length - 1);
  } while (randomIndex === lastIndex);

  allLi[randomIndex].classList.add("red");

  lastIndex = randomIndex;
}, 300);
