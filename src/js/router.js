import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../vue/app.vue'
import About from '../vue/about/index.vue'
import Blog from '../vue/blog/index.vue'
import ArticleBody from '../vue/blog/article-body.vue'
import Friends from '../vue/friends/index.vue'
Vue.use(VueRouter)

let router = new VueRouter()

router.map({
    '/': {
        component: About
    },
    '/home': {
        component: About
    },
    '/blog': {
        component: Blog
    },
    '/blog/:id': {
        name: 'article',
        component: ArticleBody
    },
    'friends': {
        component: Friends
    }
})

router.start(App, 'app')
