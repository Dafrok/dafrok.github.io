<template lang="jade">
nav
    a(v-link="{path: '/articles'}") Blog
    a(v-link="{path: '/about'}") About Me
    a(v-link="{path: '/friends'}") Friends
</template>

<style lang="stylus" scoped>
nav
    a
        display block
        padding 1rem
        &:hover, &:active
            background rgba(0, 0, 0, 0.1)
</style>

<script>
export default {
}
</script>
