var Hoge = function(ref){
    this.hoge_ = 10000;
    this.huga_ = "HOHOOHOHOHOHOHO";
    var max = 100;
    this.list_ = new Array(max);
    for(var i = 0; i<max;++i){
        this.list_[i] = 0;
    }
    this.ref_ = ref;
};
Hoge.prototype.finalize = function(){
    this.ref_ = null;
    this.list_ = null;
};

var http = require('http');
http.createServer(function (request, response) {
    response.statusCode = 404;
    response.end('not found');
}).listen(8080);

var count = 0;
var list = [];
process.nextTick(function T(){
    if(++count % 100000 === 0){
/*
        list.forEach(function(o){
            o.finalize();
        })
*/
        list.length = 0;
    }
    var x = new Hoge(list);
    list.push(x);
    process.nextTick(T);
});
setInterval(function(){
    if(global.gc){
        gc();
    }
}, 5000);
