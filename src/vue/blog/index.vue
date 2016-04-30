<template lang="jade">
section Blog
    loading(:is-loading="!ready")
    span(v-text="articleId")
    ul
        li(v-for="article in articles")
            a(v-text="article.title")
            span(v-text="created_at")
</template>

<script>
import Loading from '../util/loading.vue'
import config from '../../js/config.js'
export default {
    components: {
        loading: Loading
    },
    data () {
        return {
            ready: false,
            articles: []
        }
    },
    compiled () {
        fetch(config.issueUrl)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    this.articles = data.items
                } else {
                    this.articles = []
                }
                this.ready = true
            })
    },
    computed: {
        articleId () {
            return `(${this.$route.params.id})`
        }
    }
}
</script>
