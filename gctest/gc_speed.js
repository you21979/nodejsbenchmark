var MAX = 100000000;
var l = new Array(MAX);
for(var i = 0;i<MAX; ++i){
    l[i] = 0;
}
setInterval(function(){
    var x = 0;
    if(l[0]){}
},0);
setInterval(function(){
    if(global.gc){
        gc();
    }
}, 5000);
