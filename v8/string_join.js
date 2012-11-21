var MAX = 1500000;
[
function(){
    var TID = "join1";
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var o = [];
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        o.push('abcdefg');
        var x = o.join('');
    }
    console.timeEnd(TID);
},
function(){
    var TID = "join2";
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var o = '';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
        o += 'abcdefg';
    }
    console.timeEnd(TID);
},
function(){
    var TID = "join3";
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var o = "";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
        o += "abcdefg";
    }
    console.timeEnd(TID);
},
function(){
    var TID = "join4";
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var o = "";
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
        o.concat("abcdefg");
    }
    console.timeEnd(TID);
},
function(){
    var TID = "join5";
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        var o = "";
        o.concat(
            "abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
            ,"abcdefg"
        );
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

