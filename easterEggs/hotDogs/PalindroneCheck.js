
const prompt = require("prompt-sync")();

const integer = prompt("Enter three digit integer:  ")



const digitDivision = integer / 100
let digitReminder = integer % 10

if(digitDivision == digitReminder){
    console.log("its palindrone " + digitReminder + " and " + digitReminder + "\n");
        
        }
else if (digitDivision != digitReminder){
   console.log("Not a palindrone\n");}
