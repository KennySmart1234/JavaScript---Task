
function studentScore(score){

    if(score >= 70){
        return "A"
    }
    else if(score == 60 && score < 69){
        return "B"
    }
    else if(score == 50 && score < 59){
        return "C"
    }
    else if(score == 40 && score < 49){
        return "D"
    }
    else if(score < 40){
        return "F"
    }

}


console.log(studentScore(60))
console.log(studentScore(39))
console.log(studentScore(89))
