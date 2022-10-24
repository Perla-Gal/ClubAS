/*  MENU */

const iconoMenu = document.querySelector(".menu__menu");
const navMenu = document.querySelector(".menu__list");

iconoMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu__list--show");
});
