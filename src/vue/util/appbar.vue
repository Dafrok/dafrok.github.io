<template lang="jade">
header.appbar
    a.left(@click.stop="back")
    a.right(@click.stop="toggleMenu", :class="{active: isMenuActive}")
    h2(v-text="title")
</template>

<style lang="stylus" scoped>
header.appbar
    position fixed
    top 0
    left 0
    right 0
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
        &.left
            left .5rem
            &::before, &::after
                position absolute
                display block
                content ''
                top .75rem
                left .75rem
                width 1rem
                height 1rem
                transform rotate(-45deg)
                box-shadow -2px -2px 1px 0px white
        &.right
            right .5rem
            &.active
                /*left 11.75rem*/
                z-index 2
                /*background #69c*/
                transform rotate(180deg)
                border-radius 100%
                &:hover, &:active
                    /*box-shadow none*/
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
        position absolute
        height 2.5rem
        width 2.5rem
        top 0
        bottom 0
        margin auto
        border-radius .3rem
        transition all .3s .05s
        cursor pointer
        z-index 10
        transform translateZ(10px)
</style>

<script>
import BaseStore from '../../store/base.js'
export default {
    methods: {
        toggleMenu () {
            BaseStore.actions.toggleMenu()
        },
        back () {
            history.go(-1)
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
