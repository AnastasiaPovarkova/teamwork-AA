"use strict"
let headerNav = document.querySelector(".header__nav");
let burger = document.querySelector(".burger");
let page = document.querySelector(".page");
let placesImgs = document.querySelectorAll(".places__image");

/* Burger */
burger.addEventListener("click", (event) => {
  event.preventDefault();

  burger.classList.toggle("burger_active");
  headerNav.classList.toggle("header__nav_active");
  page.classList.toggle("page_no-scroll");
})

placesImgs.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("places__image_active");
    page.classList.toggle("page_no-scroll");
  })
})
