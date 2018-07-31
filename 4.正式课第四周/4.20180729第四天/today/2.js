let a = 10;
for(let i=0;i<10;i++){
    oLis[i].onclick = function () {
        console.log(i);
    }
}
let obj1 = {a:1,b:2};
let obj2 = {c:3};
let newObj = {...obj1,...obj2};
