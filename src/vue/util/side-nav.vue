<template lang="jade">
section.side-nav(@click.stop="", :class='{show: isShowMenu}')
    info
    navigator
</template>

<style lang="stylus">
.side-nav
    user-select none
    transition all .35s
    min-width 16rem
    width 16rem
    top 0
    bottom 0
    background #69c
    color white
    position fixed
    left 0
    overflow hidden
    /*box-shadow 0 0 .5rem black*/
    max-width 80%
    z-index 1
    transform translate(-100%, 0)
    opacity 0
.show
    opacity 1
    transform translate(0, 0)
    box-shadow 0 0 .5rem black
</style>

<script>
import Info from './info.vue'
import Navigator from './navigator.vue'
import BaseStore from '../../store/base.js'
export default {
    components: {
        info: Info,
        navigator: Navigator
    },
    computed: {
        isShowMenu () {
            return BaseStore.state.menu
        }
    }
}
</script>
