var data;
var list =document.getElementById("list");
var navs = document.getElementsByTagName("a");
// 1.ajax获取json文件中的数据
var xhr = new XMLHttpRequest();// 创建一个ajax对象；
// 打开路径
xhr.open("get",'json/product.json',false);// 同步；
// 监听
xhr.onreadystatechange = function () {
   // 2  3  4
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        // 如果上面的条件成立，前端接收到后端发来的数据;
        // 通过ajax请求到的数据是一个JSON格式的字符串；
        data = utils.toJSON(xhr.responseText);
    }
}
// 发送请求；
xhr.send();
console.log(data);
// 2.绑定数据；
function bindHtml() {
    var  str = ``;
    for(var i=0;i<data.length;i++){
        var cur = data[i];
        str+=`<li data-time="${cur.time}" data-hot="${cur.hot}" data-price="${cur.price}">
              <img src="${cur.img}" alt="">
              <span>${cur.title}</span>
              <span>${cur.time}</span>
              <span>${cur.hot}</span>
              <span>${cur.price}</span>
          </li>`
    }
    // 通过innerHTML 属性放到页面中
    list.innerHTML = str;
}
bindHtml();

// 3.给每一个a标签绑定一个点击事件；点击a,能让商品进行排序；
for(var i=0;i<navs.length;i++){
    var  cur = navs[i];
    // 给每一个a新增自定义属性；
    // 1. a  index :0    flag :-1    1  -1
    // 2. a  index :1    flag :-1
    // 3. a  index :2    flag :-1

    cur.index = i;
    cur.flag = -1;// 初始化都是-1；
    cur.onclick = function () {
        //this---> cur
        this.flag*=-1;// 每点击一次，让当前的flag*=-1；
        sortList.call(this);
        addArrow.call(this);
        removeArrow.call(this);
    }
}
// 排序
var oLis = document.getElementsByTagName("li");
function sortList() {
    // 回调函数中this指向window；需要把this保存起来；
    var that = this;
    var ary = utils.toArray(oLis);
    // 自定义数组；
    var newAry = ["data-time","data-hot","data-price"];
    ary.sort(function (a,b) {
        // getAttribute : 获取行内的自定义属性值；
        // li的整个对象
        var curLi = a.getAttribute(newAry[that.index])
        var nexLi = b.getAttribute(newAry[that.index]);
        if(that.index ===0){
            // 如果that.index 是0；则是获取的时间，需要去掉中间的-；
            curLi = curLi.replace("-","").replace("-","");
            nexLi = nexLi.replace("-","").replace("-","");
        }
        // that.flag : 正负1 ，切换，改变排序方式
        return (curLi-nexLi)*that.flag;

    });
    var frg = document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        // 引发多次回流
        frg.appendChild(ary[i]);
    };
    list.appendChild(frg);
    // 清空frg；回收堆内存
    frg = null;
}
// 4.上下箭头切换颜色
function addArrow() {
    // 获取点击的第一个儿子节点和第二个儿子节点
    var up  = this.children[0];
    var down  = this.children[1];
    if(this.flag>0){
        // 如果flag大于0；则让上面那个新增bg;
        up.classList.add("bg");
        down.classList.remove("bg");
    }else{
        //// 如果flag小于0；则让下面那个新增bg;
        up.classList.remove("bg");
        down.classList.add("bg");
    }
}
function removeArrow() {
    for(var i=0;i<navs.length;i++){
        if(this!=navs[i]){
            // 点击不是这个a的所有的子元素清掉class :bg;
            navs[i].children[0].classList.remove("bg");
            navs[i].children[1].classList.remove("bg");
            // 让其他所有的a标签上的属性flag都变成-1；下次点击时flag是-1；
            navs[i].flag = -1;
        }
    }
}









