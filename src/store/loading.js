import Vue from 'vue'
import Vuex from 'vuex'
import 'fetch-polyfill'

Vue.use(Vuex)

const state = {
    isLoading: false
}

const mutations = {
    UPDATELOADINGSTATE (state, bool) {
        state.isLoading = bool
    }
}

const actions = {
    updateLoadingState: 'UPDATELOADINGSTATE'
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
