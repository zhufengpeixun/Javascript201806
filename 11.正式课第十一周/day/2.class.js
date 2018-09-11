// es6 的class  定义一个类；
/*function Fn() {
    // this
    // return this;
    //return 1;

}
Fn();
new Fn;
Fn.a = 100;*/
// 函数   类   对象


class  Fn{
    constructor(a){
        this.a = 100;
    }
    sum(){
        console.log(this);
    }
    static  g(){

    }
}
let f = new Fn(200);
f.sum();
Fn.prototype.sum();
Fn.g();// 类的私有属性


// 继承：
class  HH  extends  Fn{
    constructor(){
        super();
    }
}
new HH;


