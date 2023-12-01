
// function printN(n){
// function recursive(current){
//      if(current>n)
//      return;
//  process.stdout.write(current + " ");
// recursive(current+1)
// }
// recursive(1)
// }

// printN(6)


function printN(n){
 if(n===0)
 return
printN(n-1)
process.stdout.write(n + " ");

}

printN(6)


