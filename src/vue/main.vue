<template lang="jade">
section.main
    header
        a(:style='{backgroundImage: avatar}', @click.stop='toggleMenu')
        h2(v-text='title')
    section.wrapper#content
        article.markdown-body(v-html='article')
        loading
</template>

<style lang="stylus" scoped>
.main
    transition all .5s
    position fixed
    top 0
    bottom 0
    right 0
    left 18rem
    background #f3f3f3
    header
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
    .wrapper
        position absolute
        top 3.5rem
        bottom 0
        left 0
        right 0
        overflow hidden
        article
            padding 1rem
@media screen and (max-width: 64rem)
    .main
        left 0
        header
            a
                display block
</style>

<script>
import Vue from 'vue'
import articlesData from '../store/articles.js'
import baseData from '../store/base.js'
import Loading from './loading.vue'
import marked from 'marked'
import IScroll from 'iscroll'

export default {
    data () {
        return {
            iscroll: {}
        }
    },
    components: {
        loading: Loading
    },
    methods: {
        toggleMenu () {
            baseData.actions.toggleMenu()
        },
        refresh () {
            Vue.nextTick(function () {
                this.iscroll.refresh()
            }.bind(this))
        }
    },
    watch: {
        article () {
            this.refresh()
        }
    },
    computed: {
        article () {
            return marked(articlesData.state.article)
            this.refresh()
        },
        title () {
            return baseData.state.title
        },
        avatar () {
            var url = baseData.state.info.owner.avatar_url
            return url ? 'url(' + url + ')' : 'none'
        }
    },
    compiled () {
        Vue.nextTick(function () {
            this.iscroll = new IScroll('#content', {
                preventDefault: false
            })
        }.bind(this))
    }
}
</script>
