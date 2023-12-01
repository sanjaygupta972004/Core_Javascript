let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let findXElement=(arr,X)=>{
     let low=0;
     let high=arr.length-1;

 while(low>=high){

   let mid= Math.floor(low+high/2);

if(arr[mid]===X){
     return arr[mid];
}
if(arr[mid]<X){
     low=mid+1;
}else high= mid-1;

 }
 }

const result= findXElement(arr,5);
console.log(result)