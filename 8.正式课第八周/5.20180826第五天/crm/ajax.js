function ajax(options) {
    // 初始化默认的对象
    var  _default = {
        url:"",
        type:"get",
        async:true,// 布尔值
        data:null,
        dataType:"json",
        success:null
    };
    //
    // 遍历options的属性，赋值给默认这个对象；
    for(var key in options){
        if(options.hasOwnProperty(key)){
            _default[key] = options[key];
        }
    }
    //
    let  xhr = new  XMLHttpRequest();
    xhr.open(_default.type,_default.url,_default.async);
    xhr.onreadystatechange = function () {
        let  val="";
        if(xhr.readyState === 4&& /^2\d{2}$/.test(xhr.status)){
            val = xhr.responseText;
            if(_default.dataType==="json"){
                val = JSON.parse(val);
            }
            _default.success.call(xhr,val);
        }


    };
    xhr.send(JSON.stringify(_default.data));
}


