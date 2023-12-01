// let arr=[2,4,6,9,23,45,87,98];

// let findReverse=(arr)=>{
//      let temp=[]
//      for(let i=arr.length-1;i>=0;i--){
//            temp.push(arr[i])
//      }

//      arr=temp;
// return arr;

// }
// console.log(findReverse(arr))


// second method 

 let arr=[2,4,6,9,23,45,87,98];
 function findReverse(arr){
     let low=0;
     let high= arr.length-1;
     for(let i=0;i<arr.length;i++){
          if(low<high){
               [arr[low],arr[high]]=[arr[high],arr[low]]
               low++
               high--
          }
     }
return arr;
 }

 console.log(findReverse(arr))
