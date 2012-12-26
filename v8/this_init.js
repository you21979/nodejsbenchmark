var MAX = 10000000;
var CLS1 = function(){
    var self = this;
    self.x = 0;
    self.y = 0;
    self.z = 0;
    self.a = 0;
    self.b = 0;
    self.c = 0;
    self.d = 0;
};
var CLS2 = function(){
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
};
var CLS3 = function(){
    var list = new Array(7);
    list[0] = 0;
    list[1] = 0;
    list[2] = 0;
    list[3] = 0;
    list[4] = 0;
    list[5] = 0;
    list[6] = 0;
    this._x = list;
};

[
function(){
    var TID = "self";
    var c = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c = new CLS1();
    }
    console.timeEnd(TID);
},
function(){
    var TID = "this";
    var c = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c = new CLS2();
    }
    console.timeEnd(TID);
},
function(){
    var TID = "array";
    var c = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c = new CLS2();
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});










