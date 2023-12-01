let arr=[2,7,0,6,0,0,6,7,90,0,0,7]

let rightShift=(arr)=>{
     let count=0;
     for(let i=0;i<arr.length;i++){
          if(arr[i]!==0){
               [arr[i],arr[count]]=[arr[count],arr[i]]
               count++
          }
       
     }
     return arr
}
console.log(rightShift(arr))