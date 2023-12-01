//BASIC ON DATE
let mydate=new Date()
console.log(mydate.toLocaleDateString())
console.log(mydate.toDateString())
console.log(mydate.toTimeString())

let mycreateddat=new Date(2023,05,23,6,3,)
console.log(mycreateddat.toLocaleDateString())
let mycreateddate=new Date("03-05-2023") //mm-dd-yy
console.log(mycreateddate.toLocaleDateString())

let newdate = new Date ()
let mytimestamp= Date.now()
console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000/3600/60/60) )
console.log(newdate.getMonth())
console.log(newdate.getDay())