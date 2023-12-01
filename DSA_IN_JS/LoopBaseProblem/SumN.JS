//==-- sum of natural number 1-n--==
let sumofnumber =(num)=>{
     let sum=0;
     for(let i=0;i<num;i++){
          sum += i;
     }
     return sum;
};
let result=(sumofnumber(199));
console.log(result);
console.log(sumofnumber(343));