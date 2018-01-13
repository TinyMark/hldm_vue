<template>
    <div class="aside">
        <div :class="{leftSide:true,show:asideShow}">
            <div>
                <img src="http://119.28.98.182:8888/logo.png" alt="">
            </div>
            <ul>
                <li v-for="(v,i) in asideList" :key="i" @click="hideAside">
                    <router-link :to="v.path">{{ v.text }}</router-link>
                </li>
            </ul>
        </div>
        <div :class="{mask:true,show:asideShow}" @click="hideAside"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            asideList: [
                { text: "连载动漫", path: "/lianzai" },
                { text: "专题列表", path: "/zhuanti" },
                { text: "关于", path: "/" }
            ]
        }
    },
    computed: {
        asideShow() {
            return this.$store.state.asideShow
        }
    },
    methods: {
        hideAside() {
            this.$store.state.asideShow = false;
            var rootDiv = this.$parent.$el;
            rootDiv.parentNode.style = "overflow-y:auto";
        }
    }
}
</script>

<style lang="less">
@import url("../../style/aside.less");
</style>
