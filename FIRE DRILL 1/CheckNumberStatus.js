const prompt = require("prompt-sync")();

let digit = prompt("What a digit? ");



if(digit >= 1){
    console.log("Positive")
}

else if(digit < 1){
    console.log("Negative")
}

else if(digit == 0){
    console.log("Zero")
}




