<template lang="jade">
li
    a(v-link="{path: `/blog/${id}`}")
        div.title(v-text="title")
        div.date(v-text="date")
        div.summary(v-text="summary")
</template>

<script>
export default {
    props: ['id', 'title', 'date', 'summary']
}
</script>
