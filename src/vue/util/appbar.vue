<template lang="jade">
header.appbar
    a.left(@click.stop="leftIconHandler", :class="leftIcon")
    a.right(@click.stop="rightIconHandler", :class="rightIcon")
    form.search-bar(v-if="showSearch", transition="search-bar", @submit.prevent="searchHandler")
        input(type="search", placeholder="Search", v-model="keyword")
    h2(v-text="title", v-if="!showSearch", transition="title")
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
    .title-transition
        transition all .3s ease
        transform translate(0, 0)
        opacity 1
    .title-enter, .title-leave
        opacity 0
        transform translate(-20%, 0)
    .search-bar-transition
        transition all .3s ease
        left 3.5rem
    .search-bar-enter, .search-bar-leave
        left 100%
    .search-bar
        padding 0 3.5rem 0 1rem
        position absolute
        line-height 3.5rem
        right 0
        background #555
        input
            color white
            font-size 1rem
            width 100%
            line-height inherit
            background transparent
    a
        &:hover, &:active
            box-shadow 0 0 1px 1px silver
        &::after, &::before
            transition all .5s
            position absolute
            content ''
            display block
        &.close
            transform rotate(-180deg)
            &:hover, &:active
                box-shadow none
            &::before, &::after
                width 1.6rem
                background white
                height .1rem
                top 1.15rem
                left .35rem
                box-shadow 0 .5rem 0 white, 0 -.5rem 0 white
            &::before
                transform rotate(45deg)
                box-shadow none
            &::after
                transform rotate(-45deg)
                box-shadow none
        &.search
            &::before
                width 1.2rem
                height 1.2rem
                border-radius 100%
                border 2px solid white
                background rgba(255, 255, 255, 0.3)
                top .4rem
                left .4rem
            &::after
                height .75rem
                width 4px
                background white
                transform rotate(-45deg)
                top 1.5rem
                left 1.7rem

        &.back
            &::before, &::after
                left 1rem
                width 1px
                height .5rem
                border 1px solid white
                background white
            &::before
                transform skew(-45deg)
                top .6rem
            &::after
                transform skew(45deg)
                bottom .6rem
                /*top .75rem
                left .75rem
                width 1rem
                height 1rem
                transform rotate(-45deg)
                box-shadow -2px -2px 1px 0px white*/
        &.menu
            &::before, &::after
                width 50%
                background white
                height .1rem
                top 50%
                left 25%
                box-shadow 0 .4rem 0 white, 0 -.4rem 0 white
        &.left
            left .5rem
        &.right
            right .5rem
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
    data () {
        return {
            keyword: ''
        }
    },
    methods: {
        toggleMenu () {
            BaseStore.actions.toggleMenu()
        },
        back () {
            history.go(-1)
        },
        toggleSearch () {
            BaseStore.actions.toggleSearch()
        },
        searchHandler (e) {
            console.log(this.keyword)
        }
    },
    computed: {
        title () {
            return BaseStore.state.title
        },
        showBack () {
            return this.$route.path.split('/').length > 2
        },
        showSearch () {
            return BaseStore.state.search
        },
        leftIcon () {
            return this.showBack ? 'back' : 'menu'
        },
        leftIconHandler () {
            return this.showBack ? this.back : this.toggleMenu
        },
        rightIcon () {
            return BaseStore.state.search ? 'close' : 'search'
        },
        rightIconHandler () {
            return this.toggleSearch
        }
    }
}
</script>
