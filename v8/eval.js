// eval と new Functionの速度比較
var fs = require('fs');
var code = fs.readFileSync('./array.js');

[function(){
    var f = new Function(code.toString());
    var x = f();
},
function(){
    var x = eval(code.toString());
}].forEach(function(fnc){
    fnc();
});

