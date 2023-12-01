//STRUCTURE OF FUNCTION 
//function definition
function name(parameter1,parameter2,parameter3){
    //body of function 
}
//function calling
name()


// EXAMPLE 
//function declaration
function demo(){   // demo is name of function 
    let address="delhi"  //address is a local variable which is store a string,it can be used only in body of function
    console.log(address)
}
demo()  // function calling 


//A function can access an outer variable as well
let Name= 'john'
function show(){
    let message ='hello '+'Name'
    console.log(message)
}
show()

//we can be modify outer variable in a body of function
let state ='bihar'
function showname(){
   state='patna'  // modify the outer variable
    let show= state + 'is capital of bihar'
    console.log(show)
}
showname()
alert(state)//bihar,unchanged, the function did not access the outer


//Parameters and returning a value
function sum(a,b){    //parameters:a,b
return a+b    // returning value a+b
}
let result=sum(8,9)  //actural arguments:8,9
console.log(result)


//Variable function
let sayhallo=function(){
    let name='John'
    return `hallo ${name} how are you?`
}
console.log(sayhallo())


//Arrow Function

//Syntax of Arrow Function
let func=(arg1,arg2,arg3)=>Expression
//Example of Arrow function
let sum=(a,b)=>a+b  //one line arrow function
console.log(sum(6,8))

//multi line Arrow function
let number=(n)=>{
    if(n%2===0){
        console.log("number is Even")
    }
    else{
        console.log("number is odd")
    }
}
number(7)

//Other Example of Arrow function
let age=12
let welcome=(age<18)?()=>console.log('Hallo!'):()=>console.log('greetings') // used ternary operator in this line
welcome()