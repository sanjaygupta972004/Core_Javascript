/*
   * 
  ***
 *****
******* 
*/

let pattern1=(num)=>{
for(let i=0;i<num;i++){
     let Add="";
     for(let j=0;j<num-i-1;j++){
          Add="";   
       
     } 
    
     
     for(let j=0;j<2*i+1;j++){
          Add +="*";
       
     } 
     
     for(let j=0;j<num-i-1;j++){
          Add=""; 
         
     } 
     console.log(Add) 
}
}
pattern1(6)
