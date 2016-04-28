<template lang="jade">
section.info
    img.avartar(:src='info.owner.avatar_url')
    label.login(v-text='info.owner.login')
    label.count Aritcles
        i(v-text='count')
</template>

<style lang="stylus">
.info
    position absolute
    overflow hidden
    top 0
    left 0
    right 0
    height 6rem
    .avartar
        position absolute
        left 1rem
        width 4rem
        height 4rem
        border-radius 100%
        display block
        margin 1rem auto
        box-shadow 0 0 3px white
    label
        display block
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
    .login
        position absolute
        left 6rem
        top 1.5rem
        font-size 1.5rem
    .count
        position absolute
        left 6rem
        top 3.5rem
</style>

<script>
import StoreBase from '../../store/base.js'
export default {
    computed: {
        count () {
            var count = StoreBase.state.count
            return ` (${count ? count : 0})`
        },
        info () {
            return StoreBase.state.info
        }
    }
}
</script>
