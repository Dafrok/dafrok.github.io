const username = location.hostname.split('.')[0]
const repo = location.pathname.split('/')[1] || location.hostname
// const username = 'dafrok'
// const repo = 'dafrok.github.io'

const apiUrl = 'https://api.github.com'
const repoUrl = apiUrl + '/repos/' + username + '/' + repo
const searchUrl = apiUrl + '/search/issues'
// const repoUrl = 'https://api.github.com/repos/vuejs/vue'
const issueUrl = repoUrl + '/issues'
const search = {
    per_page: 10,
}
export default {
    username: username,
    repo: repo,
    repoUrl: repoUrl,
    issueUrl: issueUrl,
    searchUrl: searchUrl
}
