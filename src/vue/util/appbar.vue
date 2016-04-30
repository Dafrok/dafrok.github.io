<template lang="jade">
header.appbar
    a(@click.stop="toggleMenu", :class="{active: isMenuActive}")
    h2(v-text="title")
</template>

<style lang="stylus" scoped>
header.appbar
    position relative
    height 3.5rem
    line-height 3.5rem
    text-align center
    background #333
    color white
    h2
        position absolute
        left 4rem
        top 0
        bottom 0
        right 4rem
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
    a
        position absolute
        height 2.5rem
        width 2.5rem
        top 0
        bottom 0
        left .5rem
        margin auto
        border-radius .3rem
        transition all .3s .05s
        cursor pointer
        &.active
            left 11.75rem
            z-index 2
            background #69c
            transform rotate(180deg)
            border-radius 100%
            &:hover, &:active
                box-shadow none
                /*background lighten(#69c, 20%)*/
            &::before
                transform rotate(45deg)
                box-shadow none
            &::after
                transform rotate(-45deg)
                box-shadow none
        &:hover, &:active
            box-shadow 0 0 1px 1px silver
        &::before, &::after
            transition all .5s
            position absolute
            width 50%
            content ''
            background white
            height .1rem
            top 50%
            left 25%
            box-shadow 0 .4rem 0 white, 0 -.4rem 0 white
</style>

<script>
import BaseStore from '../../store/base.js'
export default {
    methods: {
        toggleMenu () {
            BaseStore.actions.toggleMenu()
        }
    },
    watch: {
    },
    computed: {
        title () {
            return BaseStore.state.title
        },
        isMenuActive () {
            return BaseStore.state.menu
        }
    },
    compiled () {
    }
}
</script>
