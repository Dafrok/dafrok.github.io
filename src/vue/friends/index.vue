<template lang="jade">
section Friends
    ul
        li(v-for="friend in friends")
            a(v-text="friend.name", :href="firend.link", target="_blank")
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
