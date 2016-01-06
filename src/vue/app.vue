<template lang="jade">
menu
main(@click='hideMenu')
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
                if (Array.isArray(data)) {
                    articlesData.actions.updateList(data)
                } else {
                    articlesData.actions.updateList([])
                }
        })
    }
}
</script>
