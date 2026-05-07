import java.util.Arrays;
public class MostOccurringNumberCount{
    
    public static int MostOccurring(int [] numberOne){
            int total = 0;
            int countOne = 0;
        for(; countOne < numberOne.length; countOne++){
        
            int totalCount = 0;
            for(int countTwo = countOne; countTwo < numberOne.length; countTwo++){
                if(numberOne[countOne] == numberOne[countTwo]){
                    totalCount++;
                } 
            }
            if (totalCount > total){
            
            total = totalCount;
            }
        
        } return total;
    }
    
        public static int MostOccurringNumber(int [] numberTwo){
    
            int total = 0;
            int countOne = 0;
        for(; countOne < numberTwo.length; countOne++){
        
            int totalCount = 0;
            for(int countTwo = countOne; countTwo < numberTwo.length; countTwo++){
                if(numberTwo[countOne] == numberTwo[countTwo]){
                    totalCount++;
                } 
            }
            if (totalCount > total){
            total = totalCount;
            }
        } return total;

    }

public static void main(String... agrs){
    int [] numberOne = {1,2,2,2,3};
    int [] numberTwo = {1,5,5,6,4};
    
    
System.out.println(MostOccurring(numberOne));
System.out.print(MostOccurringNumber(numberTwo));    
    
    }

}
