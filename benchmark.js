var benchmark = module.exports = function(f, timeout){
    var i = 0;
    var deadline = process.uptime() + timeout;
    while(1){
        if(process.uptime() >= deadline){
            break;
        }
        f();
        ++i;
    }
    return i;
};
if(!module.parent){
    var ret = benchmark(function(){
        var arraytest = new Array(100);
    }, 5.0);
    console.log("done [%d]", ret);
}
