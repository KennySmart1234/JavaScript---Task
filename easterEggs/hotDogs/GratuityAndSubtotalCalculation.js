 
 const prompt = require("prompt-sync")();

const subTotal  = prompt("Enter a number subtotal: ") 
const gratuity  = prompt("Enter a number gratuity rate: ") 



        let subtotalDivision = gratuity / subTotal;
        let gratuityResult = subTotal + subtotalDivision;

        console.log("$"+ subtotalDivision + " as gratuity and " +"$"+ gratuityResult + " as subtotal" + "\n");
