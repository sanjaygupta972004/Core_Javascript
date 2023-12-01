const user={
    firstname:"sonu",
    secondname:"yadav",
    age:21,
    admin:true,
}
console.log(user.firstname)
console.log(user["secondname"])

//nasted object

const person={
    nane:"sanjay",
    age:21,
    car:{
        car1:"bmw",
        car2:"safari",
        modalnumber :23
    }
}
console.log(person.car.car2)
const x=person
x.age=45
console.log(person.age)
delete person.age
console.table(person)

//function in object
const user1={
    firstname:"sanjay",
    secondname:"gupta",
    id:1014,
    fullname:function(){
        return( this.firstname+ " " +this.secondname).toUpperCase()
    }
}
console.log(user1.fullname())






