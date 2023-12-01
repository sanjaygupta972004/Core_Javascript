// apply() it is a specified function to used for find special array in object,
//  special value in array

const number=[2,5,7,9,4,5];
const max =Math.max.apply(null,number);
const min= Math.min.apply(null,number);
console.log(max,min)