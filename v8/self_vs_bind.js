/*
v0.8.16
self: 42ms
bind: 1695ms
*/
var MAX = 1000000;
var CLS = function(){
    this.x = 0;
    this.y = 0;
    this.z = 0;
}
var f = function(cb){
    cb();
};
CLS.prototype.SelfTest = function(){
    var self = this;
    f(function(){
        self.x += 1;
        self.y += 2;
        self.z += 3;
    });
};
CLS.prototype.BindTest = function(){
    f(function(){
        this.x += 1;
        this.y += 2;
        this.z += 3;
    }.bind(this));
};

[
function(){
    var TID = "self";
    var c = new CLS();
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c.SelfTest();
    }
    console.timeEnd(TID);
},
function(){
    var TID = "bind";
    var c = new CLS();
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c.BindTest();
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

