console.log(1110);
// 右键 --> run 1.js  ;在node环境下，运行js;
function fn() {
    console.log(100);
}
fn();

// 把函数暴露出去；
module.exports = exports = {
    fn : fn
}