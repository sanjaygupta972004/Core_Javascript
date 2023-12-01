// find index of a array which are contain first max value

let arr=[2,5,45,3,4,78,45,3];
function findMax(arr)  
 {
     let r=0;
     
     for(let i =0; i< arr.length;i++){
          if(arr[r]<arr[i])
               r= i;
          
     }
  return r;
     
}

console.log(findMax(arr))