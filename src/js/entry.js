import Vue from 'vue'
import App from '../vue/app.vue'
import hljs from 'highlight.js'
hljs.initHighlightingOnLoad()

new Vue({
    el: 'body',
    components: {
        app: App
    }
})
