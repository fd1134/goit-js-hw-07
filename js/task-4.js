const form = document.querySelector(".login-form");
const elements = {};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = e.target.elements.email.value;
  let passwordValue = e.target.elements.password.value;

  if (emailValue.trim() === "" || passwordValue.trim() === "") {
    window.alert("All form fields must be filled in");
  } else {
    elements.email = emailValue;
    elements.password = passwordValue;
  }
  console.log(elements);
  form.reset();
});
