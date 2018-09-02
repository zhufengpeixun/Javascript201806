//import  : 导入一个模块
// export 可以导出数据；
// 利用了es6的解构赋值的特点；把a模块中 的变量进行解构；得出a模块的数据
// import 优先级会提升，会提前执行；一般情况下，import都会放在页面的最上面
//import {b,c,d} from "./a.js";
// 把所有的东西导入作为一个对象，存在于当前的js中；
import  * as s from "./a.js";
console.log(s);
s.d();

// gulp   grunt : 压缩

