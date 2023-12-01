let arr=[4,6,2,9]

function findsort(arr){
for(let i=0;i<arr.length;i++){
     if(arr[i-1]>arr[i]){
          return false;
     }
}
return true
}

console.log(findsort(arr))