// object pass in any array

let user={
    username:'sam',
    price:999,
    logedin: true,
    welcome:function() {
    console.log(`${this.username}:welcome hera my website`)
    }
}
// we can not use this key-word in arrow function
// this key-word use in object 

user.welcome()

function sayhello(anyobject){
const greet=anyobject.welcome()
console.log(greet)
console.log(anyobject.username)
}
sayhello(user);

// array pass in function

let myarray=[2,43,5,6,7,8];

let passarray=(anyarray)=>{
    console.log(anyarray[3]);
}
passarray(myarray)
