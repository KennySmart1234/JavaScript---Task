
const prompt = require("prompt-sync")();

const inputKilogram  = prompt("Enter amount of water in kilogram: ") 
const initialTemperature  = prompt("Enter initial Temperature: ") 
const finalTemperature  = prompt("Enter final Temperature: ") 


let initialMinusFinal = finalTemperature - initialTemperature;
let energyNeeded = inputKilogram * initialMinusFinal * 4186;

    console.log("energyNeeded: " + energyNeeded + "\n");
