<template lang="jade">
aside.loading(v-if='isLoading', transition='fade')
    i.icon
        svg(xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 44 44" stroke="#fff")
            g(fill="none" fill-rule="evenodd" stroke-width=".3rem")
                circle.layer-1(cx="22" cy="22" r="6.68326")
                    //- animate(attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite")
                    //- animate(attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite")
                circle.layer-2(cx="22" cy="22" r="18.9267")
                    //- animate(attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite")
                    //- animate(attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite")
</template>

<style lang="stylus" scoped>
@keyframes loading
    0%
        opacity 0
        transform scale(0)
    50%
        opacity 1
        transform scale(.5)
    100%
        opacity 0
        transform scale(1)
circle
    transform-origin 50% 50%
.layer-1
    animation loading 1.8s infinite
.layer-2
    animation loading 1.8s -.9s infinite

.fade-transition
    transition all .3s
    opacity 1
.fade-enter, .fade-leave
    opacity 0
.loading
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    background rgba(0,0,0,0.3)
    i
        display block
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        overflow display
        width 10rem
        height 10rem
</style>

<script>
import store from '../store/loading.js'
export default {
    computed: {
        isLoading () {
            return store.state.isArticleLoading
        }
    }
}
</script>
