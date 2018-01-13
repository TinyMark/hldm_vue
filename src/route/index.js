import index from "../components/pages/index.vue";
import lianzai from "../components/pages/lianzai.vue";
import zhuanti from "../components/pages/zhuanti.vue";

export default {
    routes: [
        { path: "/", redirect: "/index" },
        { path: "/index", component: index },
        { path: "/lianzai", component: lianzai },
        { path: "/zhuanti", component: zhuanti },
    ]
}