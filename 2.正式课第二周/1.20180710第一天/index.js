//var  a = 19;
// 这里面的代码是全局的；
var utils = (function () {
    var  newAry = [];// 私有变量
    function unique(ary) {
        for(var i=0;i<ary.length;i++){
            var cur = ary[i];
            if(newAry.indexOf(cur)===-1){
                newAry.push(cur)
            }
        }
        return newAry;
    }
    function sortMy() {
         // 上一级作用域是自执行函数形成的作用域；
    }
    return  {
        unique:unique,
        sortMy:sortMy
    };
})();



