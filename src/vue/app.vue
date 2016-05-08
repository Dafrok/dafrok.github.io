<template lang="jade">
section.body(@click="closeMenu")
    appbar
    side-nav
    page
    mask
</template>

<style lang="stylus">
*
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
a
    color inherit
    text-decoration none
.body
    padding-top 3.5rem
    height 100%
</style>

<script>
import config from '../js/config.js'
import BaseStore from '../store/base.js'
import SideNav from './util/side-nav.vue'
import Appbar from './util/appbar.vue'
import Page from './util/page.vue'
import Mask from './util/mask.vue'

const repoUrl = config.repoUrl
const issueUrl = config.issueUrl

export default {
    components: {
        appbar: Appbar,
        sideNav: SideNav,
        page: Page,
        mask: Mask
    },
    methods: {
        closeMenu () {
            BaseStore.actions.toggleMenu(false)
        }
    },
    init () {
        BaseStore.actions.getRepoInfo()
    }
}
</script>
