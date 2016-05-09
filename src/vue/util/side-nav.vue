<template lang="jade">
section.side-nav(@click.stop="", :style="{width: `${width}rem`, transition: menuPosition.origin ? 'none' : 'all .35s',transform: menuTransform}", :class="{show: isShowMenu}", @touchstart="getMenuPosition", @touchmove="checkMenuPosition", @touchend="setMenu")
    div.nav
        info
        navigator
</template>

<style lang="stylus">
.side-nav
    user-select none
    transition all .35s
    /*min-width 13rem
    width 13rem*/
    top 0
    bottom 0
    /*background #69c*/
    background rgba(33, 33, 33, 0.8)
    color white
    position fixed
    left 0
    /*box-shadow 0 0 .5rem black*/
    max-width 80%
    z-index 1
    /*transform translate(-13rem, 0)*/
.show
    transform translate(0, 0)
    box-shadow 0 0 .5rem black
</style>

<script>
import Info from './info.vue'
import Navigator from './navigator.vue'
import BaseStore from '../../store/base.js'
export default {
    props: ['width'],
    components: {
        info: Info,
        navigator: Navigator,
    },
    methods: {
        convertPxToRem (px) {
            return px / parseFloat(getComputedStyle(document.documentElement).fontSize)
        },
        getMenuPosition (e) {
            BaseStore.actions.setMenuPosition({
                origin: this.convertPxToRem(e.changedTouches[0].pageX),
                current: this.convertPxToRem(e.changedTouches[0].pageX)
            })
        },
        checkMenuPosition (e) {
            BaseStore.actions.setMenuPosition({
                current: this.convertPxToRem(e.changedTouches[0].pageX)
            })
        },
        setMenu (e) {
            if (this.menuPosition.origin - this.menuPosition.current > 13 / 2) {
                BaseStore.actions.toggleMenu(false)
            }
            BaseStore.actions.setMenuPosition({
                current: null,
                origin: null
            })
        }
    },
    computed: {
        menuOffsetExpand () {
            let result = 0 - this.menuPosition.origin + this.menuPosition.current
            result = result > 0 ? 0 : result
            return `${result}rem`
        },
        menuOffsetShrink () {
            let result = this.menuPosition.current - this.menuPosition.origin - this.width
            result = result > 0 ? 0 : result
            return `${result}rem`
        },
        isShowMenu () {
            return BaseStore.state.menu.show
        },
        menuPosition () {
            return BaseStore.state.menu.position
        },
        menuTransform () {
            if (this.menuPosition.origin && this.isShowMenu) {
                return this.menuPosition.origin ? `translate(${this.menuOffsetExpand}, 0)` : ''
            } else if (this.menuPosition.origin && !this.isShowMenu) {
                return this.menuPosition.origin ? `translate(${this.menuOffsetShrink}, 0)` : ''
            } else {
                return this.isShowMenu ? `translate(0, 0)` : `translate(${-this.width}rem, 0)`
            }
        }
    }
}
</script>
