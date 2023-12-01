//single tone object
let tinderuser=new Object()
tinderuser.id="zcdvns5634",
tinderuser.name="summy"
tinderuser.email="summy@t464gmail.com"

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))


//nested object
let user={
    email:"sanu03232@gmail.com",
    fullname:{
        firstname:"sanjay",
        lastname:"gupta"
    }
}
console.log(user.fullname.firstname)///access of object

// object assign
let obj1={
a:1,
b:2,
c:3
}
let obj2={
    d:2,
    e:6
}
let obj3={...obj1,...obj2, f:6}
let obj4= Object.assign({},obj1,obj2,obj3)
console.log(obj3);
console.log(obj4)


