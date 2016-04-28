<template lang="jade">
section.side-nav(:class='{show: isShowMenu}')
    info
</template>

<style lang="stylus">
.side-nav
    user-select none
    transition all .2s
    width 18rem
    top 0
    bottom 0
    background #333
    color white
    position fixed
    left 0
    overflow hidden
    box-shadow 0 0 .5rem black
    max-width 80%
    z-index 1

@media screen and (max-width: 64rem)
    .menu
        transform translate(-100%, 0)
        box-shadow none

.show
    transform translate(0, 0)
    box-shadow 0 0 .5rem black
</style>

<script>
import Info from './info.vue'
export default {
    components: {
        info: Info
    },
    computed: {
        isShowMenu () {
            return true
        }
    }
}
</script>
