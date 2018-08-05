function EventFire() {}
EventFire.prototype.on = function(type,fn){
    //this--->实例
    //console.log(this);
    if(!this[type]){
        this[type] = [];
    }

    let ary = this[type];
    for(let i=0;i<ary.length;i++){
        if(ary[i] === fn){
            return this;
        }
    }
    ary.push(fn);
    // return出一个实例，让其能够链式调用on方法；
    return this;
}
// 发布
EventFire.prototype.run = function (type) {
    // this
    // 得到这个类型下的数组，数组中的方法；
    let ary = this[type];
    if(ary){
        for(let i=0;i<ary.length;i++){
            if(typeof ary[i]==="function"){
                ary[i].call(this)
            }
        }
    }
}
// 取消订阅
EventFire.prototype.off = function (type,fn) {
    let ary = this[type];
    for(let i=0;i<ary.length;i++){
        if(fn === ary[i]){
            ary[i] = null;
        }
    }
}
// Drag的原型指向EventFire 的实例
Drag.prototype = new EventFire();

function Drag(ele) {
    this.ele = ele;
    ele.onmousedown = this.down.bind(this);
};
Drag.prototype.down = function (e) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.l = this.ele.offsetLeft;
    this.t = this.ele.offsetTop;
    document.onmousemove = this.move.bind(this);
    document.onmouseup = this.up.bind(this);
    this.run("selfdown")
}
Drag.prototype.move = function (e) {
    let changeL = e.clientX - this.x;
    let changeT = e.clientY -this.y;
    this.ele.style.left = this.l + changeL + "px";
    this.ele.style.top = this.t + changeT + "px";
    //拖拽，执行isHit方法；
    this.run("dragStart")
}
Drag.prototype.up = function () {
    document.onmousemove = null;
    document.onmouseup = null;
    this.run("dragend")
    this.run("dragStart")
}

