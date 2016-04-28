// const username = 'dafrok'
// const repo = 'dafrok.github.io'

// production
// const username = location.hostname.split('.')[0]
// const repo = location.pathname.split('/')[1] || location.hostname
// const apiUrl = 'https://api.github.com'
// const repoUrl = apiUrl + '/repos/' + username + '/' + repo
// const searchUrl = apiUrl + '/search/issues'
// const issueUrl = searchUrl + '?q=author:' + username + '+repo:' + username + '/' + repo

// test
const username = 'dafrok'
const repo = 'dafrok.github.io'
const apiUrl = 'https://api.github.com'
const repoUrl = apiUrl + '/repos/' + username + '/' + repo
const searchUrl = apiUrl + '/search/issues'
const issueUrl = searchUrl + '?q=repo:' + username + '/' + repo

export default {
    username: username,
    repo: repo,
    repoUrl: repoUrl,
    issueUrl: issueUrl,
    searchUrl: searchUrl
}
