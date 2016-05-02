<template lang="jade">
section Blog
    loading(:is-loading="!ready")
    span(v-text="articleId")
    ul
        list-item(v-for="article in articles", :title="article.title", :date="article.created_at", :summary="article.body", :id="article.id")
</template>

<script>
import Loading from '../util/loading.vue'
import ListItem from './list-item.vue'
import config from '../../js/config.js'
export default {
    components: {
        loading: Loading,
        listItem: ListItem
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
