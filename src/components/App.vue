<template>
    <div>
        <vAside></vAside>
        <vHeader></vHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import aside from './common/aside.vue';
import header from './common/header.vue';

export default {
    components: {
        vAside: aside,
        vHeader: header
    }
}
</script>

<style lang="less">
@import url("../style/base.less");
</style>
