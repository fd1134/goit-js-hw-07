function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const value = document.querySelector(".number");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
function createBoxes(amount) {
  let markup = "";
  boxes.innerHTML = "";

  for (let index = 0; index < amount; index++) {
    markup += `<div style="background-color:${getRandomHexColor()};width:${
      30 + index * 10
    }px; height:${30 + index * 10}px;"></div>`;
  }

  boxes.innerHTML += markup;
  console.log(boxes.innerHTML);
}
createBtn.addEventListener("click", () => {
  let values =Number(value.value);
  if (values >= 1 && values <= 100) {
    console.log(values);
    createBoxes(values);
  }
  value.value = "";
});
destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
