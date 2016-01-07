import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isArticleLoading: false
}

const mutations = {
    UPDATEARTICLELOADINGSTATE (state, bool) {
        state.isArticleLoading = bool
    }
}

const actions = {
    updateArticleLoadingState: 'UPDATEARTICLELOADINGSTATE'
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
