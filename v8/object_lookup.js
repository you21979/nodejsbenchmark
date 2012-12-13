var MAX = 100000;
var OBJ = {};
for(var i=0;i<MAX;++i){
    OBJ[i] = 0;
}
[
function(){
    var TID = "simple";
    console.time(TID);
    for(var i=0;i<MAX;++i){
        if( OBJ['aaaaaaaaaaaa'] !== undefined ){
            throw ""+i;
        }else{
        }
    }
    for(var i=0;i<MAX;++i){
        if( OBJ[i] !== undefined ){
        }else{
            throw ""+i;
        }
    }
    console.timeEnd(TID);
},
function(){
    var TID = "in";
    console.time(TID);
    for(var i=0;i<MAX;++i){
        if( 'aaaaaaaaaaaa' in OBJ ){
            throw ""+i;
        }else{
        }
    }
    for(var i=0;i<MAX;++i){
        if( i in OBJ ){
        }else{
            throw ""+i;
        }
    }
    console.timeEnd(TID);
},
function(){
    var TID = "hasOwnProperty";
    console.time(TID);
    for(var i=0;i<MAX;++i){
        if( OBJ.hasOwnProperty('aaaaaaaaaaaa') ){
            throw ""+i;
        }else{
        }
    }
    for(var i=0;i<MAX;++i){
        if( OBJ.hasOwnProperty(i) ){
        }else{
            throw ""+i;
        }
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

