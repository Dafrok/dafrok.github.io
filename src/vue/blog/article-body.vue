<template lang="jade">
section
    article.markdown-body(v-html="article")
    loading(:is-loading="!article")
</template>

<style scoped lang="stylus">
article
    padding 1rem
</style>

<script>
import marked from 'marked'
import Loading from '../util/loading.vue'
import config from '../../js/config.js'
export default {
    components: {
        loading: Loading
    },
    data () {
        return {article: ''}
    },
    compiled () {
        fetch(`${config.repoUrl}/issues/${this.$route.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.article = marked(json.body)
            })
    },
    computed: {
        articleId () {
            return `(${this.$route.params.id})`
        }
    }
}
</script>
