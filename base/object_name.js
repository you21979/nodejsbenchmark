var benchmark = require("../benchmark");
var r;
var obj1 = {
    hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge : 0,
};
var obj2 = {
    e : 0,
};
r = benchmark(function(){
    obj1.hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge = 1;
}, 1) 
console.log(r);
r = benchmark(function(){
    obj2.e = 1;
}, 1) 
console.log(r);
r = benchmark(function(){
    obj1["hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge"] = 1;
}, 1) 
console.log(r);
