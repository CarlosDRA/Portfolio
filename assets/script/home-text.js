"use strict"

const words = ["DESIRE", "WANT", "NEED", "LOVE", "ADMIRE", "DREAM OF"];
const wordContainer = document.querySelector(".word-play");


function wordPlay(){
    wordContainer.innerText = randomWord(words);
    setInterval(() => {
        wordContainer.innerHTML = randomWord(words);
    }, 10000);
}

function randomWord(words){
    let number = Math.floor((Math.random() * words.length))
    let word = words[number];
    return word;
}

export default wordPlay;