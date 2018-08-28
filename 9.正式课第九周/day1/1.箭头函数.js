// 1. 箭头函数
// this 问题；
// 改变this:
// call apply  bind
// let  that = this;
// 箭头函数 ： 没有this；输出是的箭头函数定义时所在的作用域中的this；跟函数执行没有关系，只跟函数在哪定义有关；

// 上一级作用域：只跟函数在哪定义有关，跟执行没有关系；
// 箭头函数和普通函数区别：
// 1. this指向
// 2. 箭头函数不能被new;
// 3. 箭头函数没有arguments;
// 4. 不能作为generator函数；
/*function sum() {
    // arguments:
    let fn = ()=>{
        console.log(arguments);
    }
    fn();
}
sum(1,2,3,4);*/

/*function a(b) {
    return b;
}

let  a = b =>b;*/

// 柯理化函数：
/*function a(b,c) {
    return b+c;
}
function a(b) {
    // 利用闭包的机制，把参数进行了保存；
    return function (c) {
        return function (d) {
            return b+c+d;
        };
    }
};
a(1)(2)(3);*/

/*
function a(b) {
    return function (c) {
        return b+c;
    }
}
*/
let a = b => c => b+c;// 高阶函数；两个箭头以上的箭头函数称为高阶函数；
console.log(a(1)(2));

// es6新增的哪些语法?
// 箭头函数和普通函数的区别？








