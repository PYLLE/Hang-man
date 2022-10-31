/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */


let hangman = function(){
let self = {
    words: [`banan`,`tomat`,`ananas`],
    letterElement: null,
}
console.log(self)
const word = words[Math.floor(Math.random() * words.length)];               //Gör ett slimpmässigtval av orden 
console.log(word);

for (let i = 0; i <words.length; i++) {
    let letterElement = document.createElement(`span`);
    o.appendChild(letterElement);
}
}