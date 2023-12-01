// promise => object , to use for handle Asyncronous nature and solve callback hell

const a= new Promise((resolve, reject) => {
    let success=true;
    if(success)resolve("fullfiled promise")
    else reject("some techinal Error");
});

a.then( (parameter)=>console.log(parameter))
.catch( (Error)=>console.log(Error))
.finally( ()=>console.log('well done'));

// if i want to resolve promise after some time

let arr=[];
const fetchdata=(arr)=>{
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            arr.push({name:'sanjay'});
            if(arr.length>0)resolve("fullfiled promise");
            else reject("some technical Error");
        },2000)
    })
}
fetchdata(arr)
.then( (message)=>console.log(message))
.catch((error)=>console.log(error));
