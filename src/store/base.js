import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    info: {
        owner: {}
    },
    title: 'Blog',
    menu: false
}

const mutations = {
    UPDATEINFO (state, info) {
        state.info = info
    },
    UPDATETITLE (state, title) {
        state.title = title
    },
    TOGGLEMENUSTATE (state, bool) {
        state.menu = typeof bool === 'boolean' ? bool : !state.menu
    }
}

const actions = {
    updateInfo: 'UPDATEINFO',
    updateTitle: 'UPDATETITLE',
    toggleMenu: 'TOGGLEMENUSTATE'
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
