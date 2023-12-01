//FOR LOOP

for(i=0;i<9;i++){
  //  console.log(i)
}
let mystate=["utter-pradesh","bihar","tmilnadu","assam","hariyana",45,"maharastha"]
for(let i =0 ;i<mystate.length;i++)
{
    if(typeof mystate[i]!=="string") continue
   // console.log(mystate[i])
}
//do while loop 
var i =30
do{
  //  console.log(i)
    i++
}while(i<35)




//  for of for find elements of array 
let website=["linkdin","facebook","linkdin","netflix","amazon"]
for(const item of website)
console.log(item)

// for in used for find object of key-word  and index of array.

let myarray=[1,3,4,5,6,7,8,];
for (const key in myarray) {
    console.log([key])
    }

let symbol={
    yt:"youtube",
    fc:"facebook",
    ld:"linkdin",
    gh:"github"
}
for(var key in symbol )
console.log(symbol[key])// the way to find value in a object