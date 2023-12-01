let arr=[3,6,7,8,5,43,5];

let antirotate=(arr)=>{
     let x=arr[0];
     for(let i=1; i<arr.length;i++){
         arr[i-1]=arr[i];
     }

     arr[arr.length-1]=x;

     return arr
}

console.log(antirotate(arr))