const prompt = require("prompt-sync")();

let age = prompt("What is your age? ");


if(age > 0 && age <= 12){
    console.log("I am child ", );
} 

else if(age > 12 && age < 18) {
    console.log("Teenager");
}

 else if(age >= 18) {
    console.log("Adult");
}

else{
    console.log("Invalid age");
}
