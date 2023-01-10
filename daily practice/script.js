let body = document.querySelector("body");
let sun = document.querySelector(".bi-brightness-high-fill");
sun.addEventListener("click", () => {
  sun.classList.toggle("bi-moon-fill");
  if (sun.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  }
});
