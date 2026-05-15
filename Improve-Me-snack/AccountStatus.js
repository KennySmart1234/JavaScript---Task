




function accountStatus(currentBalance){
    const account = {
        accountName: "Kenny",
        balance: currentBalance
    
    }
if(account.balance >= 0 && account.balance < 1000){
    return "Low Balance"
    }
else if(account.balance >= 1000){
    return "Sufficient Balance"
    }
    
else{
    return "You owe debt"
    }        

}

console.log(accountStatus(-500))
console.log(accountStatus(900))
console.log(accountStatus(10000))
