


function CheckNumber(number){
    if(number < 0){
    return "Negative number"
    
    }
    
    else if(number == 0){
        return "Numer is Zero";
    }
    
    else if(number > 0){
        return "Positive number"
    
    }

}

console.log(CheckNumber(-5))
console.log(CheckNumber(0))
console.log(CheckNumber(55))

