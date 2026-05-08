

const prompt = require("prompt-sync")();

const length = prompt("Enter the length side number:")


     let lengthSquare = length * length;
     let areaSum = 0.4330127019 * lengthSquare;   


     let volumeResult = areaSum * length;


    console.log("The volume is: " + volumeResult + "\n");
