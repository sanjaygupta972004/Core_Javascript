// ==--find fibonacci series--===
// fibonacci series=>0,1,1,2,3,5,8,13,18-----

let fibonacci=(num)=>{
     let pre=0,cur=1,next;
     if(num<2){
          //console.log(num);
          return num;
     }
          for(let i=2; i<=num;i++){
               next=pre+cur;
               pre=cur;
               cur=next;
           
          }
          return next
          // if(next>1){
          //      console.log(next) 
          // }
     
     
}
// for(let j=0;j<=35;j++){
// fibonacci(j)
// }
console.log(fibonacci(5))