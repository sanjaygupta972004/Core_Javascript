// NUMBER

let score=400
console.log(score)
let balence=new Number(300)
console.log(balence)
console.log(balence.toString().length)// number change into string
console.log(balence.toFixed(2)) // two zero after real number

let othernumber=123.65
console.log(othernumber.toPrecision(4))// round of value base on given by user 

let hundreds=100000
console.log(hundreds.toLocaleString('en-IN'))

//MATHS
console.log(Math)
console.log(Math.abs(-6)) // positive value
console.log(Math.round(56.6)) // find round of value
console.log(Math.max(5,9,3,2,6,7,8))//  find maximum value
console.log(Math.min(5,9,3,2,6,7,8)) // find minimum value
console.log(Math.random())// find valu from 0-1 like 0.2,0.5 etc
let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)) // this farmula used for find random value from 10-20
