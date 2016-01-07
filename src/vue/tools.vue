<template lang="jade">
section.tools
    form.search(@submit.prevent='search')
        input(type='search', placeholder='Search', name='q')
</template>

<style lang="stylus">
.tools
    height 3rem
    position absolute
    top 6rem
    left 0
    right 0
    .search
        height 3rem
        padding 0 .5rem
        background white
        margin 0 .5rem
        overflow hidden
        border-radius .5rem
        input
            width 100%
            height 100%
            font-size 1rem
    // a
    //     cursor pointer
    //     user-select none
    //     display block
    //     text-align center
    //     line-height 3rem
    //     background #ccc
    //     font-family Arial
    //     position absolute
    //     top 0
    //     right 0
    //     bottom 0
    //     width 3rem
    //     font-size 2rem
    //     &:hover,&:active
    //         background #ddd
</style>

<script>
import config from '../js/config.js'
import articlesData from '../store/articles.js'
export default {
    methods: {
        search (e) {
            let formData = {};
            let els = e.target.elements
            for (var i = 0; i < els.length; i++) {
                if (els[i].name) {
                    formData[els[i].name] = els[i].value
                }
            }
            fetch(config.searchUrl + '?q=' + formData.q + '+author:' + config.username + '+repo:' + config.username + '/' + config.repo)
                .then(function(res){
                    return res.json()
                }, function(){
                    console.log('Loading failed!')
                })
                .then(function(data){
                    if (data.items) {
                        articlesData.actions.updateList(data.items)
                    } else {
                        articlesData.actions.updateList([])
                    }
            })
        }
    }
}
</script>
