/*
v0.8.16
none: 87ms
try: 217ms
*/
var MAX = 100000000;
[
function(){
    var TID = "none";
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
    }
    console.timeEnd(TID);
},
function(){
    var TID = "try";
    console.time(TID);
    try{
        for(var i = 0; i<MAX; ++i){
        }
    }catch(e){
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

