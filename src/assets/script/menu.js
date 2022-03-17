"use strict"
const menuButton = document.querySelector(".nav-bar__menu");
const navMenu = document.querySelector(".nav-bar__link-list");
const page = document.getElementsByTagName("main");
const buttons = document.querySelectorAll(".link");


function menuEvents(){
    page[0].addEventListener("click", hideList)
    
    menuButton.addEventListener("click", toggleList)

    buttons.forEach((button) =>{
        button.addEventListener("click", hideList)
    })
}

function hideList(){
    navMenu.classList.add("nav-hidden");
}

function toggleList(){
    navMenu.classList.toggle("nav-hidden");
}


export default menuEvents;