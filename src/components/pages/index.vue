<template>
    <section>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v,i) in imgList" :key="i" :src="v.url">
                <img :src="v.img" :alt="v.title">
                <span>{{ v.title }}</span>
            </mt-swipe-item>
        </mt-swipe>

        <mt-navbar v-model="selected">
            <mt-tab-item v-for="(v,i) in firList" :key="i" :id="i+1">{{ v.name }}</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="selected">
                <a class="items" v-for="(v,i) in secList" :key="i" :src="v.url">
                    <img :src="v.img" :alt="v.name">
                    <span>{{ v.update }}</span>
                </a>
            </mt-tab-container-item>
        </mt-tab-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imgList: [],
            firList: [
                { name: "新增连载" },
                { name: "新增完结" },
                { name: "连载推送" },
                { name: "推荐完结" }
            ],
            secList: [],
            selected: 1
        }
    },
    created() {
        this.$store.state.title = "红旅动漫";
        this.$http.get(this.api.getlunbo).then(res => {
            console.log(res);
            this.imgList = res.data
        });
        this.$http.get(`${this.api.gethometab}/${this.selected}`).then(res => {
            console.log(res);
            this.secList = res.data
        });
    },
    watch: {
        selected() {
            this.$http.get(`${this.api.gethometab}/${this.selected}`).then(res => {
                console.log(res);
                this.secList = res.data
            });
        }
    }
}
</script>

<style lang="less">
@import url("../../style/home.less");
</style>
