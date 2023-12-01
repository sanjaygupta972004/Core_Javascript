let name=" sanjay"
  let greeting='hi,my name is  '
  var result=greeting+name;
 
  console.log(result)
 console.log(name.concat(","+greeting)) // ek ko dusre array se jodne ke liye
 console.log(greeting.slice(3,9))
 console. log(name.toLocaleUpperCase())
 console.log(name.length)
 console.log(greeting.split(" "))
 console.log(`my name is ${name.toLocaleUpperCase()}`)
 console.log(name.replace("anj","gupta"))//      replace in string
 console.log(greeting.trim()) //  remove space in string
 console.log(name.indexOf('n'))
 console.log(name.charAt(5))//position of character
 
let num=[3,4,4,9,5,9,4,3,]
console.log(num.sort())     // sort of array 
console.log(name.includes("a"))    // i can know present this charecter in my array