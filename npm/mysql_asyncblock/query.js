var asyncblock = require('asyncblock');
var mysql = require('mysql');

function Query(conn){
    this.conn_ = conn;
    this.q_ = [];
};
Query.prototype = {
    query : function(sql, param){
        this.q_.push({sql:sql, param:param});
    },
    // クエリー一回ごとに同期をとる
    exec0 : function(callback){
        var self = this;
        asyncblock(function(flow) {
            flow.errorCallback = function(e){//例外処理はここにくる
                console.log(e.stack);
                self.q_.length = 0;
            };
            var data = '';
            var result = null;
            while(self.q_.length > 0){
                data = self.q_.shift();
                self.conn_.query(data.sql, data.param, flow.add());
                result = flow.wait();
                //console.log(result);
            }
            callback();
        });
    },
    // クエリーを全部投げてから同期をとる
    exec1 : function(callback){
        var self = this;
        asyncblock(function(flow) {
            flow.errorCallback = function(e){//例外処理はここにくる
                console.log(e.stack);
                self.q_.length = 0;
            };
            var data = '';
            var results = null;
            while(self.q_.length > 0){
                data = self.q_.shift();
                self.conn_.query(data.sql, data.param, flow.add());
            }
            results = flow.wait();
            //console.log(results);
            callback();
        });
    },
    // asyncblockを使わない同期
    exec2 : function(callback){
        var sync = 0;
        var results = [];
        while(this.q_.length > 0){
            data = this.q_.shift();
            ++sync;
            this.conn_.query(data.sql, data.param, function(err,val){
                --sync;
                results.push(val);
                if(sync === 0){
                    //console.log(results);
                    callback();
                }
            });
        }
    },
};

module.exports = Query;
