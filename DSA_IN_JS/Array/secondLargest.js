let arr= [3,5,7,8,92,4,5,76,43];

let secondLargest=(arr)=>{
     if(arr.length===0||arr.length===1){
          return true
     }

     let first=0;
     let second=-1;
     for(let i=0; i<arr.length;i++){
          if(arr[first]<arr[i]){
               second=first;
                  first=i;
          } else if(arr[first]>arr[i]){
               if(second===-1||arr[second]<arr[i]){
                    second=i;
               } 
          }
     }
     return second;
}

console.log(TgLargest(arr))