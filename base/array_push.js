var benchmark = require("../benchmark");
var SEC = 0.1;
[
function(){
    var x = new Array();
    return {
        name : "Array",
        val : benchmark(function(){
            x.push(0);
        }, SEC) 
    };
},
function(){
    var x = new Buffer(5000000);
    var i = 0;
    return {
        name : "Buffer",
        val : benchmark(function(){
            x.writeUInt32BE(0,i);
            i+=4;
        }, SEC) 
    };
},
function(){
    var x = [];
    return {
        name : "[]",
        val : benchmark(function(){
            x.push(0);
        }, SEC) 
    };
},
function(){
    var x = new Uint32Array();
    return {
        name : "Uint32Array",
        val : benchmark(function(){
            x[x.length+1] = 0;
        }, SEC)
    };
}
].forEach(function(f){
    var ret = f();
    console.log(ret);
});
