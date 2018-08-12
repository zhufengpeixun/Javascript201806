// 1.获取元素；
var $main = $(".main"),
    $header = $(".header"),
    $footer = $(".footer"),
    $musicAudio= $("#musicAudio"),
    musicAudio = $musicAudio[0],
    $musicBtn = $("#musicBtn");
let autoTimer;
// 2.计算当前内容区域的高度；
// 用屏幕的高度- header的高度 -footer的高度- 0.6*rem；
function computedMain() {
    // px
    let winH = document.documentElement.clientHeight;
    let headerH = $header[0].offsetHeight;
    let footerH = $footer[0].offsetHeight;
    // 得到当前最新的fontSize;
    let fontSize = parseFloat(document.documentElement.style.fontSize);
    // 用屏幕的高度- header的高度 -footer的高度- 0.6*rem
    let curMainH = (winH -headerH-footerH)/fontSize-0.6 + "rem";
    $main.css("height",curMainH);
}
computedMain();
window.addEventListener("resize",computedMain);
// 3.请求数据；
$.ajax({
    url:"json/lyric.json",
    type:"get",
    async:false,
    success:function (data) {
        //console.log(data);
        bindHtml(data.lyric);
    }
});
// 4.绑定数据
//console.log(data);
// 处理数据能力；
// 业务能力；
function bindHtml(data) {
    //1.解决了标题的符号；
   data= data.replace(/&#(\d+);/g,function (res,a) {
       // 第一个参数：大正则捕获到的内容
       // 第二个参数：小正则捕获到的内容；
       // return: 把捕获到的内容进行替换；
       switch (parseFloat(a)){
           case 32:
               return " ";
           case 40:
               return "(";
           case 41:
               return ")";
           case 45:
               return "-";
       }
       // 如果捕获的不是这几个值，直接把捕获内容返回；否则，直接把捕获的内容换成undefined；
        return res;
   });
   // ?: 只匹配不捕获；
    let ary = [];
    data.replace(/\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)(?:&#10;)/g,function (res,min,sec,val) {
        //console.log(min,sec,val);
        ary.push({
            minute:min,
            second:sec,
            value:val
        })
    });
    // 循环绑定数据； 把这句歌词对应的分钟和秒都放在元素的自定义属性上；
    let str=``;
    for(let i=0;i<ary.length;i++){
        let cur = ary[i];
        str+=`<p data-min="${cur.minute}" data-sec="${cur.second}">${cur.value}</p>`;
    }
    // 把数据放进页面中的wrapper元素中，并让音乐开始播放
    $(".wrapper").html(str);
    musicAudio.play();
    autoTimer = setInterval(computedTime,1000);
    // 新增class，让音乐旋转起来；
    $musicBtn.addClass("select");
}
// [{img:"",a:[]},{img:"",a:[]}]

// 5.切换音乐是否播放；
$musicBtn.tap(function () {
    // 如果当前是停止的，让其播放；如果是播放状态让其停止； paused;
    // play   pause;
    if(musicAudio.paused){
        musicAudio.play();
        $musicBtn.addClass("select");
        // 新增定时器；
        autoTimer = setInterval(computedTime,1000);
        return;
    }
    // 如果执行下面这行代码，是播放状态；
    musicAudio.pause();
    $musicBtn.removeClass("select");
    // 清掉定时器；
    clearInterval(autoTimer);
});
let curTop =0;
let step = 0;
// 6.实现进度条
function computedTime() {
    // 每隔一秒获取当前音乐播放过的时间；
    let curTime = musicAudio.currentTime;
    let durTime = musicAudio.duration;
    let time = formatTime(curTime);// "01:28"
    // 得到当前播放时间的分钟和秒；
    let ary = time.split(":");
    let min = ary[0],
        sec = ary[1];
    $("#current").html(time);
    $("#duration").html(formatTime(durTime));
    // 如果当前时间大于总时间；清掉定时器
    if(curTime>=durTime){
        clearInterval(autoTimer);
        $musicBtn.removeClass("select");
    }
    // 设置进度条
    $(".alreay").css("width",curTime/durTime*100 +"%");
    // 选中正在歌唱的歌词；
    /*let ps = document.getElementsByTagName("p");
    for(let i=0;i<ps.length;i++){
        let curP = ps[i];
        let curMin = curP.getAttribute("data-min");
        let curSec = curP.getAttribute("data-sec");
        if(curMin === min && curSec === sec){
            step++;
            $(curP).addClass("select").siblings().removeClass("select");
            if(step>5){
                curTop-=0.84;
                $(".wrapper").css("top",curTop+"rem");
            }
        }
    }*/
    //过滤属性加上[]
   let a = $(".wrapper").find("p").filter('[data-min="' + min + '"]').filter('[data-sec="' + sec + '"]');
   if(a.length>0){
       step++;
       $(a[0]).addClass("select").siblings().removeClass("select");
       if(step>4){
           curTop-=0.84;
           $(".wrapper").css("top",curTop+"rem");
       }
   }
}
function formatTime(time) {
    // 187 "03:07"  87  "01:27";
    // time : 秒；
    // 185  03:05;
    // 计算分钟和秒；如果小于10，需要补0；
    let min = Math.floor(time/60);
    let sec = Math.round(time-min*60);
    min<10?min = "0"+min :null;
    sec<10?sec="0"+sec:null;
    return min+":"+sec;
};

