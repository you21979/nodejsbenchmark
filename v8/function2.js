var MAX = 100000000;
[
function(){
    var TID = "anonymous";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = function(){return i;};
    }
    console.timeEnd(TID);
},
function(){
    var TID = "named1";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = function aaaaaaa(){return i;};
    }
    console.timeEnd(TID);
},
function(){
    var TID = "named2";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        function aaaaaaa(){return i;};
        o = aaaaaaa;
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

