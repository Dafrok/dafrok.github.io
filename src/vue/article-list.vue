<template lang="jade">
section#article-list
    ul.article-list
        li.title(v-for='article in articles', @click='loadArticle(article.url)', :class="{active: article.active ? 'active' : ''}")
            a(v-text='article.title')
</template>

<style lang="stylus">
#article-list
    position absolute
    top 9rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .article-list
        li
            position relative
            width 100%
            height 3rem
            transition all .2s
            &:active
                background #eee
                color #666
            &.title
                a
                    cursor pointer
                    display block
                    width 100%
                    height 100%
                    padding 0 1rem
                    display inline-block
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    position absolute
                    display block
                    top 0
                    bottom 0
                    left 0
                    right 0
                    z-index 1
                    &:before
                        content ''
                        font-size 0
                        width 0
                        height 100%
                        vertical-align middle
                        display inline-block
</style>

<script>
import config from '../js/config.js'
import articlesData from '../store/articles.js'
import loadingData from '../store/loading.js'
import baseData from '../store/base.js'
import Vue from 'vue'
import IScroll from 'iscroll'

export default {
    data () {
        return {
            iscroll: {}
        }
    },
    computed: {
        articles () {
            return articlesData.state.list
        }
    },
    watch: {
        articles () {
            this.refresh()
        }
    },
    methods: {
        refresh () {
            Vue.nextTick(function () {
                this.iscroll.refresh()
            }.bind(this))
        },
        loadArticle (url) {
            loadingData.actions.updateLoadingState(true)
            baseData.actions.toggleMenu(false)
            fetch(url)
                .then(function (res) {
                    return res.json()
                }, function(){
                    console.log('Loading failed!')
                })
                .then(function (data) {
                    articlesData.actions.updateArticle(data.body)
                    baseData.actions.updateTitle(data.title)
                    loadingData.actions.updateLoadingState(false)
                })
        }
    },
    compiled () {
        Vue.nextTick(function () {
            this.iscroll = new IScroll('#article-list', {
                preventDefault: false
            })
        }.bind(this))
    }
}
</script>
