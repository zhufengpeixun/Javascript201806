/*(function (exports,module,require,__dirname,__filename) {

    return  module.exports;
})();*/

function sum() {
    let total = null;
    for(let i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            total += Number(arguments[i]);
        }
    }
    return total;
}
function plus() {

}
// 原有的空间地址不变；
module.exports.sum = sum;
module.exports.plus = plus;
// 改变了原有的空间地址；
/*module.exports = {
    sum:sum,
    plus:plus
};*/

// AMD 、CMD 、common.js 的规范；

