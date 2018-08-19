function ajax(options) {
    // 1. 初始化一个默认的对象；
    let _default = {
        url:"",
        type:"get",
        async:true,
        cache:true,
        data:null,
        success:null
    };
    // 2.对默认对象进行赋值；
    for(let key in options){
        _default[key] = options[key];
    }
    //3. 创建ajax,发送请求
    let xhr = new XMLHttpRequest();
    // 判断确保是get请求，保证data不是空的；
    if(_default.type==="get"){
        let flag = true;
        if(_default.data){
            let str="";
            for(let key  in _default.data){
                // key --->  字符串；
                str+=key + "=" + _default.data[key] + "&";
            }
            str = str.slice(0,str.length-1);
            _default.url+= "?" + str;
        }else{
            _default.url+= "?"
            if(!_default.cache){
                _default.url+= "tt="+ Date.now();
                flag = false;
            }
        }
        if(!_default.cache&&flag){
            _default.url+= "&tt="+ Date.now();
        };
    }
    xhr.open(_default.type,_default.url,_default.async);
    xhr.onreadystatechange = function () {
        if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
            // 数据成功返回
            _default.success.call(xhr,xhr.responseText);
        }
    };
    if(_default.type==="get"){
        _default.data=null;
    }
    xhr.send(_default.data);// 请求体中的数据；
};
