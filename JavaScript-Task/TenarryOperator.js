const prompt = require("prompt-sync")();

let age = prompt("What is your age? ");


//let age = 18;

(age < 12)?console.log("'I am a child'"):console.log('"I am an adult"');
