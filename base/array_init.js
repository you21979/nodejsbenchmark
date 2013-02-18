var benchmark = require("../benchmark");
var SEC = 1.0;
var MAX = 10;
[
function(){
    return {
        name : "Array",
        val : benchmark(function(){
            new Array(MAX);
        }, SEC) 
    };
},
function(){
    return {
        name : "Buffer",
        val : benchmark(function(){
            new Buffer(MAX);
        }, SEC) 
    };
},
function(){
    return {
        name : "[]",
        val : benchmark(function(){
            [0,0,0,0,0,0,0,0,0,0];
        }, SEC) 
    };
},
function(){
    return {
        name : "Uint32Array",
        val : benchmark(function(){
            var x = new Uint32Array(MAX);
            }, SEC)
    };
}
].forEach(function(f){
    var ret = f();
    console.log(ret);
});
