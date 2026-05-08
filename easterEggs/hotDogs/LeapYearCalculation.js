   
    
const prompt = require("prompt-sync")();

const year = prompt("Enter a year:  ")



    let yearDivisionOne = year / 4;
    let yearDivisionTwo = year % 400;
    let yearRemainderThree = year % 100;



    if (yearDivisionOne > 0){
    console.log("it's a leap year" + "\n");
        }
    else if (yearDivisionTwo != 0){
    console.log("Not a leap year" + "\n");
        }
    else if (yearRemainderThree == 0){
    console.log("it's a leap year" + "\n");
        }
    else
    console.log("Not a leap year" + "\n");
