const navbarBar = document.querySelector(".bar");
const navabrContent = document.querySelector(".navbar-content");

let transitionClass = ["transition-all", "delay-75", "ease-in"];

navbarBar.addEventListener("click", () => {
  navabrContent.classList.toggle("hidden");
  navabrContent.classList.add(...transitionClass)
});
