    
    
const prompt = require("prompt-sync")();

const scoreInput = prompt("Enter score (0 - 100):   ")
  
    
    
               let gradeA = "A (90-100)";
               let gradeB = "B (80-89)";
               let gradeC = "C (70-79)";
               let gradeD = "D (60-69)" ;           
               let gradeF = "F (below 60)";
             
            

        if (scoreInput >= 90){
             console.log(gradeA + "\n");
                      }
      else if (scoreInput >= 80){
             console.log(gradeB + "\n");
                    }
      else if (scoreInput >= 70){
             console.log(gradeC + "\n");
                    }
      else if (scoreInput >= 60){
             console.log(gradeD + "\n");
                    }
      else if (scoreInput < 60){
             console.log(gradeF + "\n");
                    }
