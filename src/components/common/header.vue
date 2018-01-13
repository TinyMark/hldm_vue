<template>
    <mt-header fixed :title="title">
        <mt-button icon="more" @click="moreList" slot="left"></mt-button>
        <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
</template>

<script>
export default {
    methods: {
        moreList() {
            this.$store.state.asideShow = true;
            var rootDiv = this.$parent.$el;
            rootDiv.parentNode.style = "overflow-y:hidden";
        }
    },
    computed: {
        title() {
            return this.$store.state.title
        }
    }
}
</script>

<style lang="less">
@import url("../../style/header.less");
</style>
