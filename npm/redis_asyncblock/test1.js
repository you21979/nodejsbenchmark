// using asyncblock
var redis = require('redis');
var Query = require('./query');

function dataset(q){
    for(var i=0;i<100000;++i){
        q.query('test1.'+i, JSON.stringify([i, Math.random()*100000|0, 'test']));
    }
}
[
function(){
    var TID = 'QUERY0';
    var rcl = redis.createClient();
    rcl.on('error', function (err) {
        console.log('error event - ' + rcl.host + ':' + rcl.port + ' - ' + err);
    });
    var q = new Query(rcl);
    dataset(q);
    console.log(TID);
    console.time(TID);
    q.exec0(function(){
        console.timeEnd(TID);
        rcl.quit(function (err, res) {
            console.log('Exiting from quit command.');
        });
    });
},
function(){
    var TID = 'QUERY1';
    var rcl = redis.createClient();
    rcl.on('error', function (err) {
        console.log('error event - ' + rcl.host + ':' + rcl.port + ' - ' + err);
    });
    var q = new Query(rcl);
    dataset(q);
    console.log(TID);
    console.time(TID);
    q.exec1(function(){
        console.timeEnd(TID);
        rcl.quit(function (err, res) {
            console.log('Exiting from quit command.');
        });
    });
},
function(){
    var TID = 'QUERY2';
    var rcl = redis.createClient();
    rcl.on('error', function (err) {
        console.log('error event - ' + rcl.host + ':' + rcl.port + ' - ' + err);
    });
    var q = new Query(rcl);
    dataset(q);
    console.log(TID);
    console.time(TID);
    q.exec2(function(){
        console.timeEnd(TID);
        rcl.quit(function (err, res) {
            console.log('Exiting from quit command.');
        });
    });
}
].forEach(function(fnc){
    fnc();
});
