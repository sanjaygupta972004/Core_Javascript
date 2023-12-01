// --=sum and count of digit of any number--==
function sumofdigit(num){
     let digitsum=0;
     let count=0
     while(num!=0){
          digitsum +=num%10;
          num= Math.floor(num/10);
          count++
     }
     console.log(`count of digit ! ${count}`);
     return digitsum
}
console.log(`sum of number ! ${(sumofdigit(1443435))}`)