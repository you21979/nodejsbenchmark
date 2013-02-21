var benchmark = require("../benchmark");
var r = benchmark(function(){
    setTimeout(function(){},1);
}, 1) 
console.log(r);
