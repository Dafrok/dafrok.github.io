<template lang="jade">
section.body(@touchmove.prevent='prevent')
    menu
    main
</template>

<style lang="stylus">
*
    font-family Arial
    appearance none
    border-radius 0
    box-sizing border-box
    padding 0
    margin 0
    border none
    outline 0
html,body
    width 100%
    height 100%
ul,ol
    padding 0
    margin 0
li
    list-style none
.body
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    overflow hidden
</style>

<script>
import config from '../js/config.js'
import Menu from './menu.vue'
import Main from './main.vue'
import baseData from '../store/base.js'
import articlesData from '../store/articles.js'

let repoUrl = config.repoUrl
let issueUrl = config.issueUrl

export default {
    components: {
        menu: Menu,
        main: Main
    },
    methods: {
        hideMenu () {
            baseData.actions.toggleMenu(false)
        },
        prevent (e) {
            // if (e.target.tagName !== 'CODE') {
            //     e.defaultPrevented = true
            // }
        }
    },
    compiled () {
        fetch(repoUrl)
            .then(function (res) {
                return res.json()
            }, function(){
                console.log('Loading failed!')
            })
            .then(function (data) {
                if (data.owner) {
                    baseData.actions.updateInfo(data)
                } else {
                    // todo: forbidden
                }
            })
        fetch(issueUrl)
            .then(function(res){
                return res.json()
            }, function(){
                console.log('Loading failed!')
            })
            .then(function(data){
                if (data.items) {
                    articlesData.actions.updateList(data.items)
                    baseData.actions.updateCount(data.total_count)
                } else {
                    articlesData.actions.updateList([])
                }
        })
    }
}
</script>
