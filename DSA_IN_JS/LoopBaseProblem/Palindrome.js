// check number is palindrome or not--==
// polindrome number=> any number == reverse of number ::ex.=121
let palindromenumber=(num)=>{
     let temp =num;
     let ReverseNum=0;
     while(temp!=0){
          ReverseNum = ReverseNum*10 +temp%10;
          temp= Math.floor(temp/10);
     };

     if(ReverseNum==num){
          return true
     }else{
          return false
     }
}
console.log(palindromenumber(121))