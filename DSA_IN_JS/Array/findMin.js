// find min element of index 

let arr=[3,6,45,7,6,3,89,6,1,5]

function minIndex(arr){
for(let i=0;i<arr.length;i++){
     let flag=true;
     for(let j=0;j<arr.length;j++){
          if(arr[i]>arr[j]){
               flag=false;
               break;
          }
     }

     if(flag===true){
          return i
     }
}
}

console.log(minIndex(arr))