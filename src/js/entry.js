import Vue from 'vue'
import hljs from 'highlight.js'
import attachFastClick from 'fastclick'
import 'fetch-polyfill'
import './router.js'
attachFastClick(document.body)
hljs.initHighlightingOnLoad()
