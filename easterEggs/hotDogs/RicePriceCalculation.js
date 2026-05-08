        
const prompt = require("prompt-sync")();

const weightInputOne = prompt("Enter the first rice weight:  ") 
const priceInputOne = prompt("Enter the first rice price:   ") 
const weightInputTwo = prompt("Enter the second rice weight:  ") 
const priceInputTwo = prompt("Enter the second rice price:   ") 



    if (weightInputOne > weightInputTwo){
     console.log("First rice is better price\n");
              }

    else if (weightInputTwo > weightInputTwo){
      console.log("Second rice is better price\n");
            }
    else if (weightInputTwo == weightInputOne){
      console.log("They are both better price\n");
            }
