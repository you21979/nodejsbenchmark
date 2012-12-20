var MAX = 100000000;
[
function(){
    var TID = "anonymous";
    var o = function(){};
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o();
    }
    console.timeEnd(TID);
},
function(){
    var TID = "named1";
    var o = function aaaaaaa(){};
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o();
    }
    console.timeEnd(TID);
},
function(){
    var TID = "named2";
    function aaaaaaa(){};
    var o = aaaaaaa;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o();
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

