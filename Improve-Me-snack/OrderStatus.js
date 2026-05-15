

function orderStatus(status){
    const order = {
        id: status,
        status: "Pending"

    }
if(order.id == 1){
    return order.status
    }
    
else if(order.id == 0){
    return "Delivered"
    }    

}

console.log(orderStatus(0))
console.log(orderStatus(1))







