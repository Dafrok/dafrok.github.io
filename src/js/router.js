import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../vue/app.vue'
import About from '../vue/about/index.vue'
import Blog from '../vue/blog/index.vue'
import Friends from '../vue/friends/index.vue'
Vue.use(VueRouter)

console.log(Blog)
let router = new VueRouter()

router.map({
    '/about': {
        component: About
    },
    '/blog': {
        component: Blog
    },
    '/blog/:id': {
        name: 'article',
        component: Blog
    },
    'friends': {
        component: Friends
    }
})

router.start(App, 'app')
