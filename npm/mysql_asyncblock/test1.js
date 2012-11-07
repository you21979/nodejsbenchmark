var asyncblock = require('asyncblock');
var mysql = require('mysql');
var Query = require('./query');


function dataset(q){
    //q.query('begin');
    for(var i=0;i<1000;++i){
        q.query('insert into test1(id,rnd,str) values(?,?,?);', [i, Math.random()*100000|0, 'test']);
    }
    //q.query('commit');
}

var config = {
  host : '127.0.0.1',
  user : 'root',
  password : '',
  database : 'test',
};

[function(){
    var TID = 'QUERY0';
    var mcl = mysql.createConnection(config);
    mcl.connect();
    var q = new Query(mcl);
    dataset(q);
    console.log(TID);
    console.time(TID);
    q.exec0(function(){
        console.timeEnd(TID);
        mcl.end();
    });
},function(){
    var TID = 'QUERY1';
    var mcl = mysql.createConnection(config);
    mcl.connect();
    var q = new Query(mcl);
    dataset(q);
    console.log(TID);
    console.time(TID);
    q.exec1(function(){
        console.timeEnd(TID);
        mcl.end();
    });
},function(){
    var TID = 'QUERY2';
    var mcl = mysql.createConnection(config);
    mcl.connect();
    var q = new Query(mcl);
    dataset(q);
    console.log(TID);
    console.time(TID);
    q.exec2(function(){
        console.timeEnd(TID);
        mcl.end();
    });
}
].forEach(function(fnc){
    fnc();
});
