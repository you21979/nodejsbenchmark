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
function init(thi){
    thi.x = 0;
    thi.y = 0;
    thi.z = 0;
    thi.a = 0;
    thi.b = 0;
    thi.c = 0;
    thi.d = 0;
}
var CLS3 = function(){
    init(this);
};
var CLS4 = function(){
};
var CLS5 = function(){
    var list = new Array(7);
    list[0] = 0;
    list[1] = 0;
    list[2] = 0;
    list[3] = 0;
    list[4] = 0;
    list[5] = 0;
    list[6] = 0;
    this.x = list;
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
    var TID = "this_function";
    var c = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c = new CLS3();
    }
    console.timeEnd(TID);
},
function(){
    var TID = "this_after";
    var c = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c = new CLS4();
        init(c);
    }
    console.timeEnd(TID);
},
function(){
    var TID = "array";
    var c = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        c = new CLS5();
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});










