let express = require("express");
let  app = express();


app.get("/login/:id/:name",function (req,res) {
    // 路由是可变的；冒号后面的值不是固定的；没加冒号的是固定的；
    // id : 是可变的；
    // params : 会根据当前的路由（“/login/2222/laowang”），和get中的第一个参数，然后进行匹配成一个对应的对象
    console.log(req.path);
    console.log(req.params);// {id:"1111"}
    //if(req.params.id==="2.express.js"){}
});
app.listen(8000,function () {
    console.log("启动成功")
});

// 课下练习；
let str1 = '/login/:id/:name';
let str2 = 'login/111/wang';
// {id:"111",name:"wang"}