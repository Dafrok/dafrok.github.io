<template lang="jade">
section.body(@click="closeSearch", @touchstart="prepareMenu", @touchmove="dragMenu", @touchend="showMenu")
    appbar
    side-nav(:width="13")
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
    data () {
        return {
            menuPosition: {
                origin: null,
                current: null
            }
        }
    },
    methods: {
        convertPxToRem (px) {
            return px / parseFloat(getComputedStyle(document.documentElement).fontSize)
        },
        prepareMenu (e) {
            if (this.convertPxToRem(e.changedTouches[0].pageX) < 1) {
                this.menuPosition.origin = this.convertPxToRem(e.changedTouches[0].pageX)
                this.menuPosition.current = this.convertPxToRem(e.changedTouches[0].pageX)
            }
        },
        dragMenu (e) {
            if (this.menuPosition.origin) {
                this.menuPosition.current = this.convertPxToRem(e.changedTouches[0].pageX)
            }
        },
        showMenu (e) {
            if (this.menuPosition.origin && this.menuPosition.current - this.menuPosition.origin > 13 / 2) {
                BaseStore.actions.toggleMenu(true)
                this.menuPosition.origin = null
                this.menuPosition.current = null
            }
        },
        closeSearch () {
            BaseStore.actions.toggleSearch(false)
        }
    },
    init () {
        BaseStore.actions.getRepoInfo()
    }
}
</script>
