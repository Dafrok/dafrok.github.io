import Vue from 'vue'
import hljs from 'highlight.js'
import fastclick from 'fastclick'
var attachFastClick = require('fastclick')
import 'fetch-polyfill'
import './router.js'
fastclick.attach(document.body)
hljs.initHighlightingOnLoad()

document.addEventListener('touchstart', function (e) {
    if(e.target === document){e.preventDefault()}
})
