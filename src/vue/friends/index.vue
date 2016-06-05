<template lang="jade">
section.friends
    h2.title FED Friends
    ul
        li(v-for="friend in friends")
            a(v-text="friend.name", :href="friend.link", target="_blank")
</template>

<script>
export default {
  data () {
    return {
      friends: [
        {name: 'Gerhut', link: 'http://gerhut.me'},
        {name: 'Sinux', link: 'http://sinux.me/'},
        {name: '楼教主', link: 'http://www.52cik.com/'},
        {name: '喵窝', link: 'http://hikarievo.me/'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.friends
  h2
    padding 1rem
  a
    list-style disc square
    display block
    padding 1rem 2rem
    border-bottom 1px dotted #eee
</style>
