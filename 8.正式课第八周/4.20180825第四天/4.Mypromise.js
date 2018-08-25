class  Mypromise{
    constructor(excutor){// constructor 接收到一个函数
        // this --->实例；
        // 当resolve执行时，会把当前实例上的成功的池子中所有的方法执行
        // 给实例初始化两个空数组；
        // 初始化一个状态，pending
        this.state = "pending";
        this.fulfilledEvent = [];
        this.rejectedEvent = [];
        this.value = undefined;
        let  resolve =result=>{
            // 循环池子中方法，让其挨个执行；
            // 定时器解决了then方法中函数的异步回调问题；
            // 一旦当前状态凝固，不能再次调用resolve状态；
            if(this.state!=="pending")return;
            this.state = "fulfilled";
            this.value  = result;
            setTimeout(()=>{
                this.fulfilledEvent.forEach(item=>{
                    if(typeof item==="function"){
                        item(this.value);
                    }
                })
            },0);
        };
        // 当reject执行时，会把实例上失败的池子方法执行；
        let reject =(reason)=>{
            if(this.state!=="pending")return;
            this.state = "rejected";
            this.value = reason;
            let timer = setTimeout(()=>{
                clearTimeout(timer);
                this.rejectedEvent.forEach(item=>{
                    if(typeof item==="function"){
                        item(this.value);
                    }
                });
            },0)
        };
        // 处理promise中的异常；
        try{
            excutor(resolve,reject);
        }catch (err){
            console.log(err);
            reject(err);
        }
    }
    // then方法，把成功或失败后的回调放进相应的池子中；
    then(resolveFn,rejectFn){
        // 如果then中，没有传递相应的方法，应对其进行补全；
        if(resolveFn==undefined){
            resolveFn = result =>{
                return result;
            }
        }
        if(rejectFn==undefined){
            rejectFn = reason =>{
                // 为了让其执行下面的reject，在这个函数中抛出一个异常
                throw new Error("err")
            }
        }
        return new Mypromise((resolve,reject)=>{//
            //不能直接把函数放进去，因为需要判断当前函数是否返回一个promise的实例；
            this.fulfilledEvent.push(result=>{
                // 通过函数的返回值，是否是一个promise的实例，执行不同的方法；如果是promise实例，应该
                try{
                    let x = resolveFn(result);
                    //x 是一个新的promise实例；下一个then中的方法会根据这个promise的状态执行不同函数；
                    x instanceof Mypromise?x.then(resolve,reject) : resolve(result);
                }catch(err){
                    reject(err);
                }
            });
            this.rejectedEvent.push(reason=>{
                // 通过函数的返回值，是否是一个promise的实例，执行不同的方法；如果是promise实例，应该
                try{
                    let x = rejectFn(reason);
                    x instanceof Mypromise?x.then(resolve,reject) : resolve(x);
                    // 如果不是promise实例，执行下一个then中resolve；
                }catch(err){
                    reject(err);
                }
            });
        })
    }
}
new  Mypromise((resolve,reject)=>{
    console.log(1);
    //throw new  Error("你你");
    reject(100);
}).then(function (data) {
    console.log(2);
}).then(function () {
    console.log(4);
},function(data){
    console.log(5);
});
console.log(6);
