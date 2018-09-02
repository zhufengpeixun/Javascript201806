let vm = new  Vue({
    el:"#app",
    data:{
        // 所有的属性都会放在vue的实例上；
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:"",// 利用v-model进行双向数据绑定；
        hash:"",
        cur:""
    },
    directives:{
        focus(el){
          el.focus();
        }
    },
    created(){
        // 当页面的hash值发生变化，会触发这个事件行为；根据当前页面的hash值，来得到最新的hash;
        this.hash="#all";
        window.addEventListener("hashchange",()=>{
            //console.log(window.location.hash);
            this.hash = window.location.hash;
        });
    },
    methods:{
        add(){
            // this --->vue的实例
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title="";
        },
        remove(val){
            // 只留下那些不相等的；当不相等时过滤出来，相等的不要；
            this.todos=this.todos.filter(item=>item!==val);
        },
        remember(val){
            this.cur = val;// 点击时，将当前的todo赋值给data中的cur属性；
        },
        cancel(){
            this.cur = "";
        }

    },
    computed:{
        filterTodo(){
            // 这个属性的属性值是根据页面hash值，来得到不同的值；
            if(this.hash==="#all" || this.hash==="")return this.todos;
            // 把todo中对象isSelected 是true返回；过滤出来；
            if(this.hash==="#finish")return this.todos.filter(item=>item.isSelected);
            if(this.hash==="#unfinish")return this.todos.filter(item=>!item.isSelected);
        },
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
})
