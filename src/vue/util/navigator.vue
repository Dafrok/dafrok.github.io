<template lang="jade">
nav
    a(v-link="{path: '/blog'}") Blog
    a(v-link="{path: '/about'}") About Me
    a(v-link="{path: '/friends'}") Friends
    a(href="//www.github.com/Dafrok", target="_blank") Github
    a(href="//codpen.io/Dafrok", target="_blank") Codepen
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
