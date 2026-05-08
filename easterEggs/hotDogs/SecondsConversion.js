         
const prompt = require("prompt-sync")();

const seconds = prompt("Enter a number of seconds: ")         
         

    let totalMinute = seconds / 60;
    let secondsRemining = seconds % 60;
    let tatalhours = totalMinute  / 60;


    console.log(seconds +" seconds = "+ tatalhours + " hours," + totalMinute +" minutes, "+ secondsRemining + "seconds\n");
