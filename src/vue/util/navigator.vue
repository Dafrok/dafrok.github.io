<template lang="jade">
nav
    a(v-link="{path: '/'}", @click="closeMenu") Home
    a(v-link="{path: '/blog'}", v-link-active="", @click="closeMenu") Blog
    a(v-link="{path: '/friends'}", @click="closeMenu") Friends
    a(href="//www.github.com/Dafrok", target="_blank", @click="closeMenu") Github
    a(href="//codpen.io/Dafrok", target="_blank", @click="closeMenu") Codepen
</template>

<style lang="stylus" scoped>
nav
    a
        display block
        padding 1rem
        transition all .3s
        &.v-link-active
            background #369
            text-indent 1rem
        &:not(.v-link-active)
            &:hover, &:active
                text-indent .5rem
                background rgba(0, 0, 0, 0.1)
</style>

<script>
import BaseStore from '../../store/base.js'
export default {
    methods: {
        closeMenu () {
            BaseStore.actions.toggleMenu(false)
        }
    }
}
</script>
