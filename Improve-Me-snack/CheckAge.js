




function CheckAge(age){
    if(age > 0 && age < 13){
        return child;
    }
    
    if(age >= 13 && age <= 18){
        return teen;
    }
    
    if(age > 18){
        return adult;
    }


    }
    
console.log(CheckAge(12));  
console.log(CheckAge(15));  
console.log(CheckAge(60));    
