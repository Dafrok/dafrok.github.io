<template lang="jade">
section
    loading(:is-loading="!ready")
    //- span(v-text="articleId")
    ul
        list-item(v-for="article in articles", :title="article.title", :date="article.created_at", :body="article.body", :id="article.number")
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
    }
}
</script>
