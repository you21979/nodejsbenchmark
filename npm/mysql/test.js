var mysql = require('mysql');
var config = require('./config');
var SimpleAsync = require('./simple_async');
var Pipeline = require('./pipeline');
var Query = require('./query');

var MAX = 100;

var pipeline = new Pipeline(1000);
pipeline.run();

// 順番に動かすタスクの登録
var start = pipeline.createTask([
function connection(next,arg){
    var TID = 'connect open close';
    console.time(TID);
    var sync = new SimpleAsync(function(){
        console.timeEnd(TID);
        next(arg);
    });
    for(var i=0;i<MAX;++i){
        sync.inc();
        var mcl = mysql.createConnection(config);
        mcl.on('end',function(){
            sync.dec();
        });
        mcl.connect(function(err){
            if(err) return;
            this.ping();
            this.end();
        }.bind(mcl));
    }
}
,
function insert(next,arg){
    function dataset_insert(q){
        for(var i=0;i<MAX;++i){
            q.query('insert into test1(id,rnd,str) values(?,?,?);', [i, Math.random()*100000|0, 'test']);
        }
    }
    var TID = 'QUERY0';
    var mcl = mysql.createConnection(config);
    mcl.on('end',function(){
        console.timeEnd(TID);
        next(arg);
    });
    console.time(TID);
    mcl.connect(function(){
        var q = new Query(mcl);
        dataset_insert(q);
        q.exec0(function(r){
            mcl.end();
        });
    });
}
/*
,
function pool(next,arg){
    var TID = 'pool open close';
    console.time(TID);
    var pool = mysql.createPool(config);
    var sync = new SimpleAsync(function(){
        pool.end();
        console.timeEnd(TID);
        next(arg);
    });
    for(var i=0;i<MAX;++i){
        sync.inc();
        pool.getConnection(function(err, connection) {
            if(err) return;
            sync.dec();
            connection.end();
        });
    }
}
*/
]);
// 開始
start(function end(err,arg){
    console.log("done:%d",process.uptime()-arg.up);
    pipeline.stop();
},{up:process.uptime()});
