//1.获取元素
var data;
var swiper = document.getElementById("swiper");
var focus = document.getElementById("focus");

var oLis = focus.getElementsByTagName("li");
var oDivs = swiper.getElementsByTagName("div");

var outer = document.getElementById("outer");

//2.请求数据
var xhr = new XMLHttpRequest();
xhr.open("get","json/banner.json",false);
xhr.onreadystatechange = function () {
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        data= utils.toJSON(xhr.responseText);
    }
}
xhr.send();
//3.绑定数据
function bindData() {
    var str = ``;
    var strLi=``;
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        str+=`<div><img src="${cur.img}" alt=""></div>`
        strLi += `<li></li>`
    }
    // 绑定数据，向页面中放DOM元素
    swiper.innerHTML = str;
    focus.innerHTML = strLi;
    // 给第一个li新增class
    oLis[0].classList.add("select");
    // 深克隆；
    swiper.appendChild(oDivs[0].cloneNode(true))
}
bindData();
// 让当前图片自动轮播；
var timer = setInterval(autoMove,2000);
// 记录当前显示的第几张图片；
var step = null;
function autoMove(n) {
    step++;
    // 如果n不是undefined，那么是点击li，让autoMove执行；
    if(typeof n==="number"){
        step = n;
    }
    if(step===5){
        // zfAnimate(swiper,{left:0},300);
        utils.css(swiper,"left",0);
        step =0;
        autoMove();
        return;
    }
    zfAnimate(swiper,{left:-1000*step},300);
    changeTip(step);
}
function changeTip(n) {
    // 循环所有的li,让和step相等的索引对应的li新增class；
    for(var i=0;i<oLis.length;i++){
        if(n===i){
            oLis[i].classList.add("select")
        }else{
            oLis[i].classList.remove("select")
        }
        if(n===4){
            oLis[0].classList.add("select")
        };
        /*n===i?oLis[i].classList.add("select"):oLis[i].classList.remove("select");
        n===4?oLis[0].classList.add("select"):null;*/
    }
}
// 鼠标划上，停止定时器；鼠标滑出，添加定时器；
outer.onmouseover = function () {
    clearInterval(timer);
}
outer.onmouseout = function () {
    timer = setInterval(autoMove,2000);
}
// 给每一个li绑定点击事件，让li的索引对应的图片显示；
for(var i=0;i<oLis.length;i++){
    oLis[i].index = i;
    oLis[i].onclick = function () {
        // 当前li的索引；
        autoMove(this.index);
    }
}