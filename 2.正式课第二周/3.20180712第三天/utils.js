/*var obj = {
    toArray:function (likeAry) {
        var  ary = [];
        try{
            ary = Array.prototype.slice.call(likeAry);
        }catch(e){
            for (var i = 0; i < likeAry.length; i++) {
                var cur = likeAry[i];
                ary.push(cur);
            }
        }
        return ary;
    }

}*/

var utils = (function () {
    function toArray(likeAry) {
        var  ary = [];
        try{
            ary = Array.prototype.slice.call(likeAry);
        }catch(e){
            for (var i = 0; i < likeAry.length; i++) {
                var cur = likeAry[i];
                ary.push(cur);
            }
        }
        return ary;
    }
    function toJSON(value) {
        return "JSON"  in window ?JSON.parse(value):eval("("+value+")");
    }
    return {
        toArray:toArray,
        toJSON:toJSON
    }
})();
