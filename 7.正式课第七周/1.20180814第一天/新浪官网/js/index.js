// rem的计算
// 自执行函数： 闭包；避免全局变量的干扰；
(function () {
    function computedFont() {
        let winW = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = winW*100/750 +"px";
    }
    computedFont();
// on 给jquery 对象的事件行为绑定方法；
    $(window).on("resize",computedFont);
})();
// 1.实现headerRender
let headerRender=(function () {
    let $headerBox = $(".headerBox"),
        $menu = $headerBox.find(".menu"),
        $navBox = $headerBox.find(".navBox"),
        flag = false;
    return {
        init:function () {
            $menu.tap(function(){
                // 如果flag是true,说明是展开状态；
                if(flag){
                    $navBox.css({
                        padding:"0rem",
                        height:"0rem"
                    });
                    flag = false;
                    return;
                }
                $navBox.css({
                    padding:"0.16rem",
                    height:"1.28rem"
                });
                flag = true;
            });
        }
    }
})();
headerRender.init();

// 2.实现轮图
let bannerSwiper = (function () {
    let $bannerBox = $(".bannerBox"),
        $wrapper = $bannerBox.find(".swiper-wrapper");
    let plan = $.Callbacks();
    // 1.订阅绑定数据
    plan.add(data=>{
        let str=``;
        $bannerBox.css("display","block");
        data.forEach((item,index)=>{// item ： 每一项  index： 索引
            str+=`<div class="swiper-slide">
                       <a href="${item.link}">
                            <img src="${item.img}" alt="">
                            <p>${item.desc}</p>
                        </a>
                  </div>`;
        });
        $wrapper.html(str);
    });
    // 2.定阅轮播
    plan.add(()=>{
        new Swiper(".swiper-container",{
            autoplay:3000,
            loop:true,
            autoplayDisableOnInteraction:false,
            direction:"horizontal",
            pagination:".swiper-pagination",
            paginationType:"bullets"
        })
    })
    return {
        init:function () {
             $.ajax({
                 url :"banner.json",
                 type:"get",
                 dataType:"json",// 返回的数据是json格式的对象
                 async:true,
                 success:plan.fire
            })
        }
    }
})();
bannerSwiper.init();

// 3.实现第二个轮播；
let liveSwiper = (function () {
    // 获取元素；
    let $liveCon = $(".liveCon"),
        $liveBox = $(".liveBox"),
        $wraper = $liveCon.find(".swiper-wrapper");
    let plan = $.Callbacks();
    // 1.订阅绑定数据；
    plan.add(data=>{
        $liveBox.css("display","block");
        let str = ``;
        data.forEach((item,index)=>{
            str+=`<div class="swiper-slide">
                    <a href="${item.link}">${item.title}</a>
                  </div>`;
        });
        $wraper.html(str);// 把拼接的结构放进页面中；
    });
    // 2.订阅轮播任务
    plan.add(()=>{
        new Swiper(".liveCon",{
            autoplay:3000,
            direction:"vertical",
            loop :true
        })
    });
    return {
        init :function () {
            $.ajax({
                url:"aside.json",// 路径js中，是相对于HTML的路径；
                type:"get",
                dataType:"json",
                success : plan.fire
            });
        }
    }
})();
liveSwiper.init();

// 4.实现新闻列表
let newsRrender = (function () {
    let $newsBox = $(".newsBox");
    let plan = $.Callbacks();
    plan.add(data=>{
        $newsBox.css("display","block");
        data = data[0].news;
        let str = ``;
        let newUl = document.createElement("ul");
        newUl.className = "newsGroup";
        newUl.id = "ul";
        data.forEach((item,index)=>{
            if("imgList" in item){
                str+=`<li class="latest"><a href="${item.link}">
                <h3>${item.title}</h3>
                <div>
                    <p><img src="${item.imgList[0]}" alt=""></p>
                    <p><img src="${item.imgList[1]}" alt=""></p>
                    <p><img src="${item.imgList[2]}" alt=""></p>
                </div>
                <span>${item.comment}<i class="icon-comment"></i></span>
            </a></li>`;
                return;
            };
            str+=`<li>
                      <a href="${item.link}">
                          <div><img src="${item.src}" alt=""></div>
                          <h3>${item.title}</h3>
                          <span>${item.comment}<i class="icon-comment"></i></span>
                      </a> 
                   </li>`;
        });
        //console.log($('.newsGroup')[0]);
        // 先把创建的ul添加到页面中；然后再获取这个ul;
        $newsBox[0].appendChild(newUl);
        // append (str);
        // innerHTML :
        $('.newsGroup').html(str);
    })
    return {
        init : function () {
            $.ajax({
                url:"news.json",
                type:"get",
                dataType:"json",
                success:plan.fire
            });
        }
    }
})();
newsRrender.init();