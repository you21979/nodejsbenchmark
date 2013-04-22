var benchmark = require("../benchmark");
var r;
r = benchmark(function(){
    (function(){})();
}, 1) 
console.log(r);
r = benchmark(function(){
    try{
    }catch(e){
    }
}, 1) 
console.log(r);
r = benchmark(function(){
    (function(){})();
}, 1) 
console.log(r);
r = benchmark(function(){
    try{
        (function(){})();
    }catch(e){
    }
}, 1) 
console.log(r);
r = benchmark(function(){
    try{
        throw new Error("");
    }catch(e){
    }
}, 1) 
console.log(r);
