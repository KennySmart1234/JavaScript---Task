const prompt = require("prompt-sync")();



const input = prompt("What is your age? ");




if(input < 12){
    console.log("My age is:", input);


} else{
    console.log("Don't ask me");

}
