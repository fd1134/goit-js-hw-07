function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
btnColor.addEventListener("click", () => {
  let colorValue = getRandomHexColor();
  spanColor.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
});
