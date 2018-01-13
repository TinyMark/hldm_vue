import Vue from "vue";

import Axios from "axios";
Vue.prototype.$http = Axios;

// vuex
import Vuex from 'vuex';
Vue.use(Vuex);

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
    render: h => h(App),
    router: new VueRouter(RouterCfg),
    store: new Vuex.Store({
        state: {
            asideShow: false,
            title: "红旅动漫"
        }
    })
})