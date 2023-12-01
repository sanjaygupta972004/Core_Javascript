/* 
******
******
******
******
*/
let pattern1=(num)=>{
     for(let i=0;i<num;i++){
      let sum=""
      for(let j=0;j<num;j++){
           sum += '*'
      }
      console.log(sum)
     }
   
 }
 pattern1(4)
let pattern2=(num)=>{
    for(let i=0;i<num;i++){
     let sum=""
     for(let j=0;j<i;j++){
          sum += '*'
     }
     console.log(sum)
    }
  
}
pattern2(5)

let pattern3=(num)=>{
     for(let i=1;i<num;i++){
      let sum=""
      for(let j=1;j<i;j++){
           sum += `${j}`
      }
      console.log(sum)
     }
   
 }
 pattern3(6)

 let pattern4=(num)=>{
     for(let i=0;i<num;i++){
      let sum=""
      for(let j=0;j<i;j++){
           sum += `${i}`
      }
      console.log(sum)
     }
   
 }
 pattern4(6)
 
 

