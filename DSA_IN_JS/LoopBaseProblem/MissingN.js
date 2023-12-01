//==-- find missing number given any array from 0-n ===---

let num= [0,3,2,4,6,7,1];
let misN=(num)=>{
     let sum=0,total=0,missnumber;
          for(let j=0;j<num.length;j++){
               sum +=num[j];
          }
     total=(num.length)*(num.length+1)/2;
missnumber=total-sum;
return missnumber
}
console.log(misN(num))