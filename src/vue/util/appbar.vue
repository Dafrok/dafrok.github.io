<template lang="jade">
header.appbar
    a
    h2
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
        display none
        position absolute
        height 2.5rem
        width 2.5rem
        top 0
        bottom 0
        left .5rem
        margin auto
        border-radius .3rem
        background-size cover
        border 1px solid silver

@media screen and (max-width: 64rem)
    header
        a
            display block
</style>

<script>

export default {
    methods: {
    },
    watch: {
    },
    computed: {
    },
    compiled () {
    }
}
</script>
