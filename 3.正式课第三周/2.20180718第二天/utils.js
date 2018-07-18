var utils = (function () {
    // 获取元素的某个元素
    function getCss(curEle,attr) {
        var  val;
        if("getComputedStyle" in window){
            val = getComputedStyle(curEle)[attr];
        }else{
            val = curEle.currentStyle[attr];
        }
        var  reg = /^width|height|fontZise|margin|padding|top|left|right|bottom$/;
        if(reg.test(attr)){
            if(!isNaN(parseFloat(val))){
                val = parseFloat(val);
            }else{
                return ""
            }
        }
        return val;
    };
    // 设置单个样式
    function setCss(curEle,attr,val) {
        if(attr === "opacity"){
            curEle.style[attr] = val;
            curEle.style["filter"] = "alpha(opacity="+val*100+")";
            return;
        }
        var  reg = /^width|height|fontSize|(margin|padding)?(top|left|bottom|right)?$/i;
        if(reg.test(attr)){
            if(typeof val==="number"){
                val = val +"px";
            }
        }
        curEle.style[attr] =val;
    }
    // 设置一组样式；
    function setGroupCss(curEle,obj) {

        for(var key in obj){
            setCss(curEle,key,obj[key])
        }
    }
    // 结合上面三个三个封装一个css;
    function css(...argu) {
        if(argu.length===3){
            setCss(...argu);
        }else if(argu.length===2){
            if(toString.call(argu[1])==="[object Object]"){
                setGroupCss(...argu)
            }else{
                return getCss(...argu);
            }
        }
    }
    function offset(curEle) {
        var parent = curEle.offsetParent;
        var left = curEle.offsetLeft;
        var top = curEle.offsetTop;
        while(parent){
            if(!/MSIE 8\.0/.test(navigator.userAgent)){
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top +=parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {left:left,top:top};
    }
    function win(attr,value) {
        if(value === undefined){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }
    return {
        getCss:getCss,
        setCss:setCss,
        setGroupCss:setGroupCss,
        css:css,
        offset:offset,
        win:win
    }


})()
