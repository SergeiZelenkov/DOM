export default function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => {
  const allLi = document.querySelectorAll(".li");
  const ul = document.querySelector(".ul");

  for (let li of allLi) {
    if (li.classList.contains("red")) {
      li.remove();
      let newLi = document.createElement("li");
      newLi.classList.add("li");
      ul.appendChild(newLi);
    }
  }
  const updatedLi = document.querySelectorAll(".li");
  if (updatedLi.length > 0) {
    updatedLi[getRandomIntInclusive(0, updatedLi.length - 1)].classList.add(
      "red"
    );
  }
}, 100);
