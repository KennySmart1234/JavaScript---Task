

//Loops in JavaScript

const object = {
    name: "Kenny",
    hobby: "football",
    age: 6

}

//toPrint in array form

console.log(Object.entries(object))

//Printing Value
//const things = Object.value(object)
//console.log(things)


//Printing Key
let item = Object.keys(object)
console.log(item)

for(let index in object){
console.log(object[index]);
    }
    
    
//Looping for Array    
const array = [2,3,4,5,6,7,8]    
    for(let number of array){
    console.log(number);
    }
    
    
const arrayKa = [2,3,4,5,6,7,8,9,10]    
    for(let index in arrayKa){
    console.log(arrayKa[index]);
    }   

//process.stdoutwrite(arrayKa[9])     
console.log(arrayKa[0])    



let count = 10;

while(count <= 20){
    console.log(count);
    count++;
}

let counter = 1;

while(counter <= 10){
    counter++;
    console.log(counter);
    
}

//Do while Loop


let doWhilecounter = 50;

do{
    doWhilecounter++;
    console.log(doWhilecounter); 
}
    while(doWhilecounter <= 100)
    
  
  
//  Printing even numbers from 1 to 110  
let doWhilecount = 0;

do{

    console.log(doWhilecount);
    doWhilecount = doWhilecount + 2; 
    }
    while(doWhilecount <= 10)    





    
