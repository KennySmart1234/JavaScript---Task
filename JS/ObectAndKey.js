
//Copying Object
let person = {

    first_Name: "Kehinde",
    last_Name: "Smart",
    age_: 10
};



let user ={
    
    AllName: ["Kenny", "Stephen", "Kayode"],
    firstName: "Kenny",
    lastName: "Olatunji",
    age: 16,
    isMale: false,
//    passing the copied object
    ...person

};


//calling input based on index(like array)

//console.log(user.AllName[2]);
//console.log(user.AllName);
//console.log(user.lastName);
//console.log(user["firstName"]);
//console.log(user.isMale);



//updating
//user.gender = "sheMale";
//user.age=13;

//deleting
//delete user.age;

console.log(user);


//Destructring
//let {age, isMale, lastName} = user;
//console.log(age);
//console.log(isMale);
//console.log(lastName);




