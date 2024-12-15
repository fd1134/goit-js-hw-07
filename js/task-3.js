const text = document.querySelector("#name-input");
const name2 = document.querySelector("#name-output");
text.addEventListener("input", () => {
  console.log();
  let nameValue = text.value.trim();
  name2.textContent = nameValue === "" ? "Anonymous" : nameValue;
  console.log(nameValue);
});
