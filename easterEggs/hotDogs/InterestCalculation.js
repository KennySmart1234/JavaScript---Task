
const prompt = require("prompt-sync")();

const firstMonth  = prompt("Enter first month saving: ") 
const secondMonth = prompt("Enter second month saving: ") 
const thirdMonth  = prompt("Enter third month saving: ") 
const fourthMonth = prompt("Enter fourth month saving: ") 
const fifthMonth  = prompt("Enter fifth month saving: ") 
const sixthMonth  = prompt("Enter sixth month saving: ") 



        let savingInterestOne = firstMonth + 0.003125;
        let savingInterestTwo   = secondMonth + savingInterestOne   + 0.003125;
        let savingInterestThree = thirdMonth  + savingInterestTwo   + 0.003125;
        let savingInterestFour  = fourthMonth + savingInterestThree + 0.003125;
        let savingInterestFive  = fifthMonth  + savingInterestFour  + 0.003125;
        let savingInterestSix   = sixthMonth  + savingInterestFive  + 0.003125;

let sum = savingInterestOne + savingInterestTwo + savingInterestThree + savingInterestFour + savingInterestFive + savingInterestSix; 

console.log("Sum after first six months:" + sum + "\n");






