import index from "../components/home/index.vue";

export default {
    routes: [
        { path: "/", redirect: "/index" },
        { path: "/index", component: index }
    ]
}