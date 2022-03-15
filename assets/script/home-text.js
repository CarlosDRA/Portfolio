"use strict"

const words = ["DESIRES", "WANTS", "NEEDS", "DESERVES", "LOVES"];
const wordContainer = document.querySelector(".word-play");


function wordPlay(){
    wordContainer.innerText = randomWord(words);
}

function randomWord(words){
    let number = Math.floor((Math.random() * words.length))
    let word = words[number];
    return word;
}

export default wordPlay;