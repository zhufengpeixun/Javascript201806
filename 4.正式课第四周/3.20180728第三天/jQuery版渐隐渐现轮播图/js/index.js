// 1.获取元素
var  $outer = $("#outer");
var  outer = $("#outer")[0];// document.getElementById()
var  $focus = $("#focus");
var  $swiper = $("#swiper");
var  $oImgs;
var $oImgsLength;
// 通过jQuery获取的元素没有映射机制；
// 2.ajax获取数据；
$.ajax({
    url:"data.json",// 路径
    async:false,// Jquery 默认是异步请求；true：异步；false：同步；
    type:"get",// type: 请求方式；get/post/delete/put
    //data:{
    //      username:"张三",
    //      password:11111,
    //      code : ""
    // },参数
    success:function (data) {
        // data : 请求到的数据；
        //console.log(data);
        bindData(data)
    }
});

// 3.绑定数据

function bindData(data) {
    // $.each : 遍历；
    // param1:遍历的数据
    // param2:回调函数
    var imgStr = ``;
    var liStr = ``;
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
    $oImgs.each(function (index) {// 当前图片的索引；
        // this-->每一张图片
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
$("#focus li").hover(function () {
    // index: 获取当前元素的索引；
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
})






