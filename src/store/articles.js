import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    list: [],
    article: 'None'
}

const mutations = {
    UPDATELIST (state, list) {
        state.list = list
    },
    UPDATEARTICLE (state, article) {
        state.article = article
    }
}

const actions = {
    updateArticle: 'UPDATEARTICLE',
    updateList: 'UPDATELIST'
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
