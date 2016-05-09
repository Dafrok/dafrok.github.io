import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    info: {
        owner: {}
    },
    count: 0,
    title: 'Dafrok Scope',
    search: false,
    mask: false,
    menu: {
        show: false,
        position: {
            origin: null,
            current: null
        }
    }
}

const mutations = {
    GETREPOINFO (state) {
        fetch('https://api.github.com/repos/dafrok/dafrok.github.io')
            .then(res => res.json())
            .then(json => {
                state.info.owner = json.owner
            })
        fetch('https://api.github.com/search/issues?q=repo:dafrok/dafrok.github.io+author:dafrok+is:open&page=1&per_page=1')
            .then(res => res.json())
            .then(json => {
                state.count = json.total_count
            })
    },
    UPDATETITLE (state, title) {
        state.title = title
    },
    SETMENUPOSITION (state, position = {}) {
        state.menu.position.origin = typeof position.origin === 'undefined' ? state.menu.position.origin : position.origin
        state.menu.position.current = typeof position.current === 'undefined' ? state.menu.position.current : position.current
    },
    TOGGLEMENUSTATE (state, bool) {
        state.menu.show = (typeof bool === 'boolean') ? bool : !state.menu.show
    },
    TOGGLESEARCHSTATE (state, bool) {
        state.search = (typeof bool === 'boolean') ? bool : !state.search
    },
    UPDATECOUNT (state, count) {
        state.count = count
    }
}

const actions = {
    getRepoInfo: 'GETREPOINFO',
    updateTitle: 'UPDATETITLE',
    toggleMenu: 'TOGGLEMENUSTATE',
    toggleSearch: 'TOGGLESEARCHSTATE',
    updateCount: 'UPDATECOUNT',
    setMenuPosition: 'SETMENUPOSITION'
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
