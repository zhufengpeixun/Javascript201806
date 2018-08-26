// 导入模块
let http = require("http");
let fs = require("fs");
let url = require("url");

// http 服务： 1.读取资源文件，返回资源； 2. 读取数据，返回数据；
let server = http.createServer(function (req,res) {
    //解析出路径和路径参数；
    let {pathname,query} = url.parse(req.url,true);
    //console.log(pathname,query);
    // query : 存储的是前端请求传过来的参数；通过url来获取的参数；不能获取post请求中参数；参数放进请求体中；
    // 带有后缀名的路径
    let reg = /\.(\w+)$/g;
    if(reg.test(pathname)){
        // 只有pathname中有.后缀名，才会进这个判断；
        let con = fs.readFileSync("."+pathname,"utf8");
        res.end(con);
        return;
    }
    // 把读出来的内容响应给客户端；
    // 下面要操作数据；
    let path = "./json/custom.json";
    let obj = {"code":0,"msg":"成功",data:null};
    // 1.获取用户所有数据；
    if(pathname==="/getList"){
        let con = fs.readFileSync(path,"utf8");
        obj.data = con;
        // 服务端不能把对象直接响应过去；需要把对象转换json格式的字符串；
        res.end(JSON.stringify(obj));
    }
    // 2.删除某个客户
    if(pathname==="/removeInfo"){
        // 把数据读出来  readFileSync ;
        let arr = JSON.parse(fs.readFileSync(path,"utf8"));
        for(let i=0;i<arr.length;i++){
            if(arr[i]["id"]==query["id"]){
                arr.splice(i,1);
            }
        }
        fs.writeFileSync(path,JSON.stringify(arr),"utf8");
        res.end(JSON.stringify(obj));
    }
    // 3.新增客户
    if(pathname==="/addInfo"){
        // 接收一下客户端发过来的数据；如何接收到请求体中的数据
        let str = ``;
        req.on("data",function (chunk) {
            // 对于服务器和客户端来说，数据不能一下子传送给服务器，数据传输就会触发这个回调函数；
            str+=chunk;
            ///console.log(chunk);
        });
        req.on("end",function () {
            // 一旦服务器接收到客户端请求体中所有的数据，就会触发end对应的回调函数；
            //console.log(str);// 传过来的数据，并且是一个JSON格式的字符串；'{"name":"eww","age":"rw","phone":"re","address":"ree"}'
            let  curCustom = JSON.parse(str);
            // 先读取，然后再写入；
            let  con = JSON.parse(fs.readFileSync(path,"utf8"));
            con.length>0?curCustom["id"] = con[con.length-1]["id"]+1:curCustom["id"]=1;
            con.push(curCustom);
            fs.writeFileSync(path,JSON.stringify(con),"utf8");
        });
        res.end(JSON.stringify(obj));
    }
    // 4.获取某个客户的具体信息；
    if(pathname==="/getInfo"){
        // 查出对应id的那个客户；
        let con = JSON.parse(fs.readFileSync(path,"utf8"));
        for(let i=0;i<con.length;i++){
            if(con[i]["id"]==query["id"]){
                obj.data = con[i];
            }
        }
        res.end(JSON.stringify(obj));
    }
    // 5.修改客户信息
    if(pathname==="/updateInfo"){
        let  str=``;
        req.on("data",function (chunk) {
            str+=chunk;
        });
        req.on("end",function () {
            let curData = JSON.parse(str);
            let con = JSON.parse(fs.readFileSync(path,"utf8"));
            for(let i=0;i<con.length;i++){
                if(curData["id"]==con[i]["id"]){
                    con[i] = curData;
                    break;
                }
            }
            fs.writeFileSync(path,JSON.stringify(con),"utf8");
            obj.msg="修改成功";
            res.end(JSON.stringify(obj));
        })
    }
});
server.listen(8000,function () {
    console.log("启动成功");
});