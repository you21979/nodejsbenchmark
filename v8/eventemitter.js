/*
v0.8.16
fire_string: 2826ms
fire_number: 3405ms
たぶん文字変換のオーバーヘッド
*/
var events  = require('events');
var e = function(){
    events.EventEmitter.call(this);
}
e.prototype = new events.EventEmitter();
var STR_EVT = 'hogehogehogehoge';
var NUM_EVT = 6;
var MAX = 100000000;
[
function(){
    var TID = "fire_string";
    console.time(TID);
    var a = new e();
    a.on(STR_EVT,function(i){
    });
    for(var i = 0; i<MAX; ++i){
        a.emit(STR_EVT,i);
    }
    console.timeEnd(TID);
},
function(){
    var TID = "fire_number";
    console.time(TID);
    var a = new e();
    a.on(NUM_EVT,function(i){
    });
    for(var i = 0; i<MAX; ++i){
        a.emit(NUM_EVT,i);
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

