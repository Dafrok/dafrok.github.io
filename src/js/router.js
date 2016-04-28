import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../vue/app.vue'
Vue.use(VueRouter)


let router = new VueRouter()

router.map({
})

router.start(App, 'app')
