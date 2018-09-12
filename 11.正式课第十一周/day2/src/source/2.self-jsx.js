

// 新的函数；这是一个类；会默认创建一个实例，那么这个实例就是一个虚拟的DOM元素
class CreateElement {
    constructor(type,attrs,children){
        this.type = type;
        this.attrs = attrs;
        this.children = children;
    }
    // render: 将虚拟的DOM转化成真实的DOM；
    render(){
        // this.type  this.attrs    this.children;
        let ele = document.createElement(this.type);
        // 循环对象
        for (let key  in  this.attrs){
            let _key = key;
            // 对特殊的属性名进行处理和判断；
            if(key==="className"){
                _key = "class";
            }
            if(key === "htmlFor"){
                _key = "for";
            }
            ele.setAttribute(_key,this.attrs[key]);
        }
        // children : 文本；虚拟的DOM元素；
        this.children.forEach(child=>{
            // 判断当前数组成员是否是一个CreateElement,如果是实例，需要继续调用render方法；
           let childEle =  child instanceof CreateElement?child.render():document.createTextNode(child);
           ele.appendChild(childEle);
        })
        return  ele;
    }
}

let  obj = {
    // children 会接收第三个参数以后所有的参数；并且是一个数组；
    createElement(type,attrs,...children){
        // 需要返回一个虚拟的DOM；
       return  new CreateElement(type,attrs,children);
    }
};
let objDOM = {
    // element : 是一个虚拟的DOM元素；是CreateElement这个类的实例；
    render(element,container){
        container.appendChild(element.render())
    }
};

let a = obj.createElement("h1",{a:1,className:"dev"},"hello",obj.createElement("span",{b:2},"world"));
objDOM.render(a,document.getElementById("root"));
export default {
    obj
}