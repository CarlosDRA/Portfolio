"use strict"

let menuButton = document.querySelector(".nav-bar__menu");
let navMenu = document.querySelector(".nav-bar__link-list");
let page = document.getElementsByTagName("main");

page[0].addEventListener("click", () =>{
    navMenu.classList.add("nav-hidden");
})

menuButton.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-hidden");
})

