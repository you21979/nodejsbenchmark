/*
v0.8.16
queue push:1: 0ms
queue pop:1: 0ms
queue push:100: 0ms
queue pop:100: 0ms
queue push:1000: 0ms
queue pop:1000: 0ms
queue push:10000: 0ms
queue pop:10000: 0ms
queue push:100000: 3ms
queue pop:100000: 39191ms
queue push:1: 0ms
queue pop:1: 0ms
queue push:100: 0ms
queue pop:100: 0ms
queue push:1000: 0ms
queue pop:1000: 0ms
queue push:10000: 0ms
queue pop:10000: 1ms
queue push:100000: 0ms
queue pop:100000: 5ms
circ queue push:1: 0ms
circ queue pop:1: 0ms
circ queue push:100: 0ms
circ queue pop:100: 0ms
circ queue push:1000: 0ms
circ queue pop:1000: 0ms
circ queue push:10000: 0ms
circ queue pop:10000: 1ms
circ queue push:100000: 1ms
circ queue pop:100000: 78684ms
circ queue push:1: 0ms
circ queue pop:1: 0ms
circ queue push:100: 0ms
circ queue pop:100: 0ms
circ queue push:1000: 0ms
circ queue pop:1000: 0ms
circ queue push:10000: 0ms
circ queue pop:10000: 1ms
circ queue push:100000: 2ms
circ queue pop:100000: 78625ms
*/
var assert = require('assert');
[
function(MAX){
    var q = [];
    var TID = "queue push:"+MAX;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        q.push(i);
    }
    console.timeEnd(TID);
    var TID = "queue pop:"+MAX;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var n = q.shift(i);
        assert(n === i);
    }
    console.timeEnd(TID);
},
function(MAX){
    var q = [];
    var TID = "circ queue push:"+MAX;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        q.push(i);
    }
    console.timeEnd(TID);
    var TID = "circ queue pop:"+MAX;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var n = q.shift(i);
        assert(n === i);
        q.push(n);
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    [1, 100, 1000, 10000, 100000].forEach(function(MAX){
        fnc(MAX);
    });
    // 一回目と2回目で速度が大幅に違うのはフラグメントが関係してる？
    [1, 100, 1000, 10000, 100000].forEach(function(MAX){
        fnc(MAX);
    });
});

