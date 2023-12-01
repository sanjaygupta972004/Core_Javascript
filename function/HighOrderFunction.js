//High Order Function => A Function Which Takes Another Function As A Argument Or Returns A Function 
//Example 
function x(){        //x() is a call back function
    console.log('namaste');
} 
function y(x){       // y(x) is a high order function 
    return x();
}
y(x);

// Another example of high order function
// let redius= [3,4,7,8,9] find area and diameter and circumference of circle by using high order function 

let redius= [3,4,7,8,9];
let area = function(redius){
    return Math.PI*redius*redius;
}
    let circumference=function(redius){
return 2*Math.PI*redius;
}

let diameter= function(redius){
    return 2*redius;
}


let calculate= function(redius,logic){
    let output=[];
    for(let i =0;i<redius.length;i++){
     output.push(logic(redius[i]));
}
return output;
}
console.log(calculate(redius,area))
console.log(calculate(redius,circumference))
console.log(calculate(redius,diameter))
 /*
Output
redius of circle
[
    28.274333882308138,
    50.26548245743669,
    153.93804002589985,
    201.06192982974676,
    254.46900494077323
]
circumference of circle
  [
    18.84955592153876,
    25.132741228718345,
    43.982297150257104,
    50.26548245743669,
    56.548667764616276
  ] 
  diameter of circle
  [ 6, 8, 14, 16, 18 ]
  */


//Predefined High Order Function like [].Map(), [].Filter(), [].Reduce()

//[].Map()=> create a new array from calling a function for every element
//Example of [].map()
//let a array =[3,6,8,9,4], find double and binary of this array
 
let arr =[3,6,8,9,4];
let output=arr.map((x)=>x*2);
console.log(output);  //output [ 6, 12, 16, 18, 8 ] 

let result = arr.map((x)=>x.toString(2));
console.log(result);   //output [ '11', '110', '1000', '1001', '100' ]

// [].filter() =>creates a new array filled with elements pass a test provided by a function
// Example of [].filter()
// let a array =[3,7,9,2,4,7] , find odd number of this array

let Arr= [3,7,9,2,4,7];
let odd= function(x){
    return x%2;
}
let Result=Arr.filter(odd);
console.log(Result);  // output [ 3, 7, 9, 7 ]

let myarray= Arr.filter(  (num)=> num>=4&&num<9)
console.log(myarray)

// [].reduce()=> executes a reducer function for array element A reducer will only return one value
// Example of [].reduce()
// let a array =[8,5,3,9,7,2] find sum of this array

let number = [8,5,3,9,7,2];
// first of all this problem solve by using Anonymours Function
let sum =function(number){
    let total=0;
    for(let i=0;i<number.length;i++){
        total= total+ number[i];
    }
    return total;
}
let findsum=sum(number);
console.log(findsum)    // Output 34

// this problem solve by using [].reduce()

let Output=number.reduce(function(acc,curr){   //compare with anonymours function acc=total and curr =number[i]
    acc=acc+curr;                              // curr=current value of array and acc=accumulator or intial value
    return acc;
},0)
console.log(Output)    //output 34


// another examle of [].reduce() to realted E-commerce website

let shopingcart=[
    {
       itemname: 'magggi',
       price:   23
    },
    {
        itemname: 'shoap',
        price:   79
     },
     {
        itemname: 'paint',
        price:   23
     },
     {
        itemname: 'oil',
        price:   83
     },
];

let totalprice= shopingcart.reduce( (acc,item)=>{
    return (item.price+acc)
},0);

console.log(totalprice);
// total price=218



