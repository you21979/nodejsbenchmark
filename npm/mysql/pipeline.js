/** 
 * @fileOverview パイプライン
 */
"use strict";
var Class = require(__dirname+'/class');

var _setImmediate = (function(){
    return (global.setImmediate ? setImmediate : process.nextTick);
})();

var MAX_PIPELINE = 100; // 実行数

/**
 *  パイプライン直列化クラス
 */
var Pipeline = module.exports = Class({
    /**
     *  初期化
     */
    initialize :function(max){
        this.max = max ? max : MAX_PIPELINE;
        this.q = [];
        this.runflag = false;
    },
    /**
     *  後始末
     */
    finalize : function(){
        this.q.length = 0;
    },
    /**
     *  パイプライン処理を開始する
     */
    run : function(){
        this.runflag = true;
        var max = this.max;
        var self = this;
        _setImmediate(function T(){
            if(self.runflag){
                // 最大数まで実行
                var len = self.q.length > max ? max : self.q.length;
                for(var i = 0; i<len; ++i){
                    var f = self.q[i];
                    if(f){
                        f();
                    }
                }
                // 実行した分だけ削除
                if(len > 0){
                    self.q.splice(0, len);
                }
                _setImmediate(T);
            }
        });
    },
    /**
     *  パイプライン処理を停止する
     */
    stop : function(){
        this.runflag = false;
    },
    /**
     *  タスクを作成する
     */
    createTask : function(funcs){
        if(!(funcs instanceof Array)){
            throw new Error("funcs must be Array");
        }
        var i = 0;
        var len = funcs.length;
        var q = this.q;
        // 内部のリストに一連の流れを登録する関数を返す
        return function f(cb, arg){
            if(i >= len){
                if(cb){
                    cb(null, arg);
                }
            }else{
                q.push(function(){
                    if(i < len){
                        try{
                            funcs[i++](function(argp){
                                f(cb, argp);
                            }, arg);
                        }catch(e){
                            //throw e;
                            cb(e, arg);
                        }
                    }
                });
            }
        };
    },
});

