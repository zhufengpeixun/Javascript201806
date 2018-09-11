import  Vue from "Vue";
import  Home from "../components/Home.vue";
import  List from "../components/List.vue";
let routes = [
    {path:"/home",component:Home},
    {path:"/list",component:List}
]
import VueRouter from "vue-router";
//在vue中使用插件，需要use一下；
Vue.use(VueRouter);
let router = new  VueRouter({
    routes
});
export default router;

