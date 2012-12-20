var MAX = 1000000;
[
function(){
    var TID = "buildin";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        setTimeout(function(){}, 0);
    }
    console.timeEnd(TID);
},
function(){
    var q = [];
    var x = function(){}
    var TID = "custom";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        q.push(x);
    }
    setTimeout(function(){
        q.forEach(function(f){
            f();
        });
    }, 0);
    console.timeEnd(TID);
}
].forEach(function(fnc){
    fnc();
});

