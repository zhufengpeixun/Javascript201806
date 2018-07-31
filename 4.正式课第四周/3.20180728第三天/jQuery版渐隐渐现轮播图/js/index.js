// jquery渐隐渐现原理： 五张图片叠加到一起，首先让所有图片隐藏,懒加载；如果想让第几张显示，让他透明度变成1，其他图片都变成0；fadeIn;

// 1. 获取元素
// 2.请求数据；$.ajax({url:"",type:"",async:"",data:{},cache:"",success:function(data){},error:function(){}})
// 3.绑定数据；es6模板字符串；html()-->获取一些元素；
// 4.延迟加载；
// 5.图片的轮播；outer.step
// 6. 鼠标划上清除定时器
// 7.鼠标划上li,让其显示对应的图片
// 8.点击左右，切换图片

// 1.获取元素
var  $outer = $("#outer");
var  outer = $("#outer")[0];// document.getElementById()
var  $focus = $("#focus");
var  $swiper = $("#swiper");
var  $oImgs;//
var $oImgsLength;
// 通过jQuery获取的元素没有映射机制；
// 2.ajax获取数据；
$.ajax({
    url:"data.json",// 路径
    async:false,// Jquery 默认是异步请求；true：异步；false：同步；
    // jQuery ajax是默认是异步的；如果async没有赋值，默认是true；如果这个键值对写错，同时也是异步的；
    type:"get",// type: 请求方式；get/post/delete/put
    //data:{
    //      username:"张三",
    //      password:11111,
    //      code : ""
    // },参数
    success:function (data) {
        // 如果ajax是异步的，那么当前回调函数会等待所有的同步执行完成之后，才会执行；
        // data : 请求到的数据；
        //console.log(data);
        bindData(data);
    }
});

// 3.绑定数据

function bindData(data) {
    // $.each : 遍历；
    // param1:遍历的数据
    // param2:回调函数
    var imgStr = ``;
    var liStr = ``;
    // 1.参数： 要循环的对象数组，2.回调： 每循环一次，执行一次；
    // 3.this  遍历的每一项
    $.each(data,function (index) {// index: 当前数据的索引；
        // console.log(this);// this---> 每一条具体的数据；
        imgStr+=`<img data-src="${this.img}">`;
        liStr +=`<li></li>`;
    });
    // 把数据放回页面；innerHTML
    $swiper.html(imgStr);
    $focus.html(liStr);
    $("#focus li").eq(0).addClass("select");
    $oImgs = $("#outer img");
    $oImgsLength = $oImgs.length;// 5
    delayImg();
    outer.timer = setInterval(autoMove,2000);
}
function delayImg() {
    // Jquery 的原型上； jquery的实例可以调用
    // 1. 回调函数
    // 3.循环的是jquery的实例； 类数组；[{}]
    $oImgs.each(function (index) {// 当前图片的索引；
        //  this-->每一张图片
        var that  = this;
        var trueAddress = $(this).attr("data-src");
        var newImg = new Image;// 原生JS对象；
        newImg.src = trueAddress;
        // 路径存在
        $(newImg).load(function () {
            that.src = trueAddress;
            // 索引为0的显示；
            index===0?$(that).fadeIn():null;
            newImg = null;
        })
    })
}
outer.step = 0;
function autoMove(n) {
    outer.step++;
    typeof n !=="undefined"?outer.step = n:null;// 如果传参数，改变outer.step变为n;
    outer.step>$oImgsLength-1?outer.step = 0:null;// 当到最后一张图片时，改变outer.step 的值；
    $oImgs.eq(outer.step).fadeIn().siblings().fadeOut();
    $("#focus li").eq(outer.step).addClass("select").siblings().removeClass("select");
}

// 鼠标划上outer
$("#outer").hover(function () {
    // 鼠标划上执行
    clearInterval(outer.timer);
},function () {
    // 鼠标滑出执行
    outer.timer = setInterval(autoMove,2000);
});

// 鼠标划上li
console.log(1);
$("#focus li").hover(function () {
    // index: 获取当前元素的索引；
    // 原生对象转jquery  $(原生对象)
    autoMove($(this).index());
});

// 点击左右按钮
$("#right").click(function(){
    autoMove();
});
$("#left").click(function(){
    outer.step-=2;
    if(outer.step<-1){
        // 如果满足条件，说明已经到第一张，下一张应该是第五张
        outer.step=$oImgsLength-2;
    }
    autoMove();
});






