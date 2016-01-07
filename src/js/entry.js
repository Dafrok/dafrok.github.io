import Vue from 'vue'
import App from '../vue/app.vue'
import hljs from 'highlight.js'
import 'fetch-polyfill'
hljs.initHighlightingOnLoad()

new Vue({
    el: 'body',
    components: {
        app: App
    }
})
