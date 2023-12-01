//==>The bind() method creates a new function that, 
//when called, has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the new function is called.

const Module = {
     x: 43,
     getx: function() {
       return this.x;
     }
   }
   
   let Unboundgetx = Module.getx.bind(Module);

   //let Boundgetx = Unboundgetx.bind(Module);
   console.log(Unboundgetx());