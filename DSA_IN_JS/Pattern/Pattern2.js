let pattern1=(num)=>{
     for(let i=0;i<num;i++){
      let sum=""
      for(let j=0;j<num-i;j++){
           sum += '*'
      }
      console.log(sum)
     }
   
 }
 pattern1(6)
 
 let pattern2=(num)=>{
     for(let i=1;i<num;i++){
      let sum=""
      for(let j=i;j<num;j++){
           sum += `${j}`
      }
      console.log(sum)
     }
   
 }
 pattern2(6)
 

 let pattern3=(num)=>{
     for(let i=0;i<num;i++){
      let sum=""
      for(let j=0;j<8;j++){
          if(j<num-i&&j>num+i){
               sum="*";
          }else{
               sum=""
          }
           
      }
      console.log(sum)
     }
   
 }
 pattern3(6)