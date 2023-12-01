const url= "https://api.nationalize.io?name=nathaniel";

const fetchdata=()=>{
    fetch(url)         // it is return a promise
    .then(  (response)=>response.json())
    .then( (data)=>console.log(data))
    .catch( (e)=>console.log(e))
    .finally(  ()=>console.log("well done"))
};
fetchdata();


// async and await method

const fetchData=async()=>{
    try {
        const response=await fetch(url);
        const data= await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error)
    }finally{
        console.log("well done api");
    }
};
fetchData()

// const fetchdata=()=>{
//     fetch(url)         // it is return a promise
//     .then(  (response)=>response.json())
//     .then( (data)=>console.log(data))
//     .catch( (e)=>console.log(e))
//     .finally(  ()=>console.log("well done"))
// };
// fetchdata();
