const categories = document.querySelector("#categories");
const item = document.querySelector(".item");

console.log("Number is categories: " + categories.children.length);
const arrCategories = Array.from(categories.children);
console.log(
  arrCategories.forEach((children) =>
    console.log(
      children.firstElementChild.textContent +
        "\nElements:" +
        children.lastElementChild.children.length
    )
  )
);
