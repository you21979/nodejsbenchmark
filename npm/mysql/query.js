var mysql = require('mysql');
var SimpleAsync = require('./simple_async');

function Query(conn){
    this.conn_ = conn;
    this.q_ = [];
};
Query.prototype = {
    query : function(sql, param){
        this.q_.push({sql:sql, param:param});
    },
    exec0 : function(callback){
        var results = [];
        var sync = new SimpleAsync(function(){
            callback(results);
        });
        while(this.q_.length > 0){
            data = this.q_.shift();
            sync.inc();
            this.conn_.query(data.sql, data.param, function(err,val){
                results.push({err:err,val:val});
                sync.dec();
            });
        }
    },
};
module.exports = Query;
