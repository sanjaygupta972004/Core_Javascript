
//object literals
let mysymbol=Symbol("kay1")  // symbol is a data type

const user={
    name: 'john',
    age:19,
    "fullname":'john rechardsan',
    email:'john4844@gmail.com',
    address:'south-america',
    tologedin:true,
    lastlogindays:["saturday","sunday"],
    [mysymbol]:"kay1"
}

//metod of access of object
console.log(user.address);
console.log(user["name"]);//second method
console.log(user['fullname'])// fullname access only this method
console.log(typeof user[mysymbol])
 
user.email="sanjaygupta07054@gmail.com"  // changing value of object
console.log(user.email)
 // Object.freeze(user) // this syntax is defined for we can not change the value of object
 user.email="sanjaygupta054@gmail.com"

 user.greeting=function(){        /// including function in object
    console.log("hello js user  ")
 }

 user.greeting2= function(){
    console.log(`hello js user ${this.fullname}`)   // syntax using this key-word
 }
 
 console.log(user.greeting())

 console.log(user.greeting2())
 