<template lang="jade">
li.list-item
    a(v-link="{path: `/blog/${id}`}")
        div.title(v-text="title")
        div.date(v-text="createDate")
        div.summary(v-text="summary")
</template>

<style scoped lang="stylus">
.list-item
    margin 1rem
    padding 1rem
    a
        display block
        &:hover
            .title
                text-decoration underline
        .title
            font-size 125%
            font-weight bold
            margin-bottom .5rem
        .date
            margin-bottom .5rem
        .summary
            background #eee
            padding .5rem
</style>

<script>
import marked from 'marked'
export default {
    props: ['id', 'title', 'date', 'body'],
    computed: {
        summary () {
            let summary = marked(this.body).replace(/<[^>].*?>/g, '')
            summary = summary.length > 200 ? summary.substring(0, 200) + '...' : summary
            return summary
        },
        createDate () {
            return this.date.split(/T/)[0]
        }
    }
}
</script>
