<template lang="jade">
aside.mask(v-if="showMask", @click="toggleMenu", transition="fade")
</template>

<style lang="stylus" scoped>
.mask
    background rgba(0, 0, 0, 0.3)
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    &.fade-transition
        transition all .35s
        opacity 1
    &.fade-enter, &.fade-leave
        opacity 0
</style>

<script>
import BaseStore from '../../store/base.js'
export default {
    computed: {
        showMask () {
            return BaseStore.state.menu.show
        }
    },
    methods: {
        toggleMenu () {
            BaseStore.actions.toggleMenu(false)
        }
    }
}
</script>
