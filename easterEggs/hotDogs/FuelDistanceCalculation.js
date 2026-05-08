

const prompt = require("prompt-sync")();

const distanceInput = prompt("Enter distance to drive: ") 
const MpgInput = prompt("Enter fuel efficiency of the car in miles per gallon: ") 
const ppgInput = prompt("Enter price per gallon: ") 


    let distaceMpg = distanceInput / MpgInput;
    cost = distaceMpg * ppgInput;

    console.log("Cost = " + cost + "\n");


