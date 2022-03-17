"use strict";

import Menu from "./menu.js";
import Word from "./home-text.js"

let menu = new Menu();
let word = new Word();


let button = document.querySelector("button");

button.addEventListener("click", () =>{
    window.location.href = "#projects";
})
