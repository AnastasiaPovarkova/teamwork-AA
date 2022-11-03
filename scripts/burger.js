"use strict"
let headerNav = document.querySelector(".header__nav");
let burger = document.querySelector(".burger");
let page = document.querySelector(".page");

burger.addEventListener("click", (event) => {
  event.preventDefault();

  burger.classList.toggle("burger_active");
  headerNav.classList.toggle("header__nav_active");
  page.classList.toggle("page__no-scroll")
})
