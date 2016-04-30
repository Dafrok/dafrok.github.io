<template lang="jade">
section.body(@click="closeNav")
    appbar
    side-nav
</template>

<style lang="stylus">
*
    font-family Arial
    appearance none
    border-radius 0
    box-sizing border-box
    padding 0
    margin 0
    border none
    outline 0
html,body
    width 100%
    height 100%
ul,ol
    padding 0
    margin 0
li
    list-style none
.body
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    overflow hidden
</style>

<script>
import config from '../js/config.js'
import BaseStore from '../store/base.js'
import SideNav from './util/side-nav.vue'
import Appbar from './util/appbar.vue'

const repoUrl = config.repoUrl
const issueUrl = config.issueUrl

export default {
    components: {
        appbar: Appbar,
        sideNav: SideNav
    },
    methods: {
        closeNav () {
            BaseStore.actions.toggleMenu(false)
        }
    },
    compiled () {
    }
}
</script>
