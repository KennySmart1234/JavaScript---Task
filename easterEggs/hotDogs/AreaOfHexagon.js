
const prompt = require("prompt-sync")();

const hexagonInput  = prompt("Enter side of the hexagon: ") 

    let hexagonSquare = hexagonInput * hexagonInput;

    let area = 2.598076211 * hexagonSquare;


    console.log("Area = "+ area + "\n");
