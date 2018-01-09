import Vue from "vue";

import Axios from "axios";
Vue.prototype.$http = Axios;

import mint from "mint-ui";
import 'mint-ui/lib/style.css';
Vue.use(mint);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import RouterCfg from "../route";

import api from "../js/api.js";
Vue.prototype.api = api;

import App from "../components/App.vue";

new Vue({
    el: "#App",
    render: c => c(App),
    router: new VueRouter(RouterCfg)
})