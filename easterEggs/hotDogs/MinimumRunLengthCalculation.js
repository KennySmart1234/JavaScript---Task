

const prompt = require("prompt-sync")();

const velocity = prompt("Enter the velocity: ") 
const initialAcceleration = prompt("Enter the acceleration:  ") 



    let squareVelocity = velocity * velocity;
    let sumAcceleration = 2 * initialAcceleration;
    let length = squareVelocity / sumAcceleration;   


    console.log("Minimum run length: " + length + "\n");
