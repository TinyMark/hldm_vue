<template>
    <section>
        <ul>
            <li v-for="(v,i) in showList" :key="i">
                <a href="javascript:void(0)">
                    <img :src="v.img">
                    <span>{{ v.title }}</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showList: []
        }
    },
    created() {
        this.$store.state.title = "专题列表";
        this.$http.get(this.api.getzhuanti).then(res => {
            console.log(res);
            this.showList = res.data
        })
    }
}
</script>

<style lang="less" scoped>
@import url("../../style/zhuanti.less");
</style>
