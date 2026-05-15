

function adminProfile(){
    const user = {
        username: "Admin",
        password: 12345
    
    }
delete user.password
    return user

}

console.log(adminProfile())
