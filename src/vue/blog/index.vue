<template lang="jade">
section Blog
    span(v-text="articleId")
</template>

<script>
export default {
    computed: {
        articleId () {
            return `(${this.$route.params.id})`
        }
    }
}
</script>
