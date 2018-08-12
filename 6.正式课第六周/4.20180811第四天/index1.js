var $musicAudio = $("#musicAudio"),
    musicAudio = $musicAudio[0],
    $musicBtn  = $(".musicBtn"),
    $header = $(".header"),
    $main = $(".main"),
    $wrapper =$(".wrapper"),
    $footer = $(".footer"),
    $current = $(".current"),
    $already = $(".already"),
    $duration = $(".duration ");

// 计算高度

function computedMain() {
    var winH = document.documentElement.clientHeight;
    var rem  = parseFloat(document.documentElement.style.fontSize);
    var hei = winH -$header[0].offsetHeight-$footer[0].offsetHeight-rem*0.6;
    $main.css("height",hei/rem,"rem")
}
computedMain();
console.log(1);
$.ajax({
    url:"json/lyric.json",
    type:"get",
    async:false,
    success:function (data) {
        bindHtml(data);
    }
});


function bindHtml(data) {
    data  = data.replace(/&#(\d+);/,function (res,a) {
        switch(parseFloat(a)){
            case 32 :
                return " ";
                break;
            case 40:
                return "(";
                break;
            case 41:
                return ")";
                break;
            case 45:
                return "-";
        }
        return res;
    });
    var ary  =[];
    data.replace(/\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)(?:&#10)/g,function (res,min,sec,val) {
        ary.push({
            minute:min,
            second:sec,
            value:val
        })
    });
    var str =``;
    for(var i=0;i,ary.length;i++){
        var item = ary[i];
        str+=`<p data-min="${item.minute}" data-sec="${item.second}">${item.value}</p>`
    }
    $wrapper.html(str);
    musicAudio.play();
    $musicBtn.addClass("select");
}
musicAudio.addEventListener("canplay",function () {
    autotimer = setInterval(computedTime,1000)
})


$musicBtn.tap(function () {
    if(musicAudio.paused){
        musicAudio.play();
        $musicBtn.addClass("select");
        autotimer = setInterval(computedTime,1000);
        return;
    }
    musicAudio.paused();
    clearInterval(autotimer);
    $musicBtn.removeClass("select");
});


function computedTime() {
    var curTime = musicAudio.currentTime;
    var durTime = musicAudio.duration;
    if(curTime>durTime){
        clearInterval(autotimer);
        $musicBtn.removeClass("select");
        $already.css("width","100%");
        return;
    }
    $already.css("width",curTime/durTime*100+"%");
    var cur = formateTime(curTime);
    $duration.html(formateTime(durTime));
    $current.html(cur);
    var ary = cur.split(":");
    var min = ary[0];
    var sec = ary[1];
    var curP = $wrapper.find("P").filter('[data-min="'+min+'"]').filter('[data-sec="'+sec+'"]');
    if(curP.length>0){
        curP.addClass("select").sibling().removeClass("select");
        step++;
        if(step>=4){
            curTop-=0.84;
            $wrapper.css("top",curTop+"rem");
        }
    }
}
function formateTime(time) {
    var min = Math.floor(time/60);
    var sec = Math.round(time-min*60);
    min<10?min ="0" +min:null;
    sec<10?sec = "0"+sec:null;
    return min+":"+sec;
}



