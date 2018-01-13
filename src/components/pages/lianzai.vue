<template>
    <section>
        <ul>
            <li v-for="(v,i) in showList" :key="i">
                <a href="javascript:void(0)">
                    <div class="leftSide">
                        <img :src="v.img">
                    </div>
                    <div class="rightSide">
                        <h4>{{ v.name }}</h4>
                        <p>{{ v.episode }}</p>
                        <p>{{ v.updateTime }}</p>
                        <p>下载次数：{{ v.downloadCount }}</p>
                    </div>
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
        this.$store.state.title = "连载动漫";
        this.$http.get(this.api.getlianzai).then(res => {
            console.log(res);
            this.showList = res.data;
        })
    }
}
</script>

<style lang="less" scoped>
@import url("../../style/lianzai.less");
</style>
