var benchmark = require("../benchmark");
var obj = function(){
    this.x = 0;
    this.y = 0;
};
obj.prototype.testself = function(){
    var self = this;
    return function(){
        self.x = 1;
        self.y = 1;
    };
};
obj.prototype.testbind = function(){
    return function(){
        this.x = 1;
        this.y = 1;
    }.bind(this);
};
var o = new obj();
var r;
r = benchmark(function(){
    o.testself();
}, 1) 
console.log(r);
r = benchmark(function(){
    o.testbind();
}, 1) 
console.log(r);
