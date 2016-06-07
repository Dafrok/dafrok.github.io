<template lang="jade">
section.about
  h2(v-el:title)
    div
    span(:style="{fontSize: `${titleFontSize}px`}") Me.
  h3 Profile
  ul
    li Name: Dafrok Zhang
    li Gender: Male ♂
    li Company: Baidu
    li Position: FE
    li Location: Beijing
    li Birthday: 1987
  h3 Contact
  ul
    li Tel: +86-10-186***408
    li Email: o.o@mug.dog
    li QQ: 8609546
  h3 Works
  ul
    li [Blog](http://dafrok.github.io)
    li [Github](https://github.com/Dafrok)
    li [Codepen](http://codepen.io/Dafrok)
  h3 Language Skills
  ul
    li ECMA Script
    li HTML5
    li CSS3
    li Node.js
    li Python
    li PHP
    li C#
    li etc.
  h3 Open Source Contribution
  ul
    li JavaScript Garden
    li vue
    li FIS3
    li UEditor
    li vue-material
    li cssgrace
    li react-colorpickr
    li gulp-pug
    li MingGeJS 😱
    li etc.
  h3 Intrests
  ul
    li open source
    li LEGO
    li Pokemon
    li etc.
</template>
<script>
export default {
  data () {
    return {
      titleFontSize: 0
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeTitle)
  },
  compiled () {
    window.addEventListener('resize', this.resizeTitle)
  },
  ready () {
    this.resizeTitle()
  },
  methods: {
    resizeTitle (e) {
      const style = getComputedStyle(this.$els.title)
      this.titleFontSize = parseInt(style.height) / 3
    }
  }
}
</script>
<style scoped lang="stylus">
.about
  padding 1rem
  h2
    background-image url(/image/me.png)
    background-size 100%
    position relative
    z-index -1
    div
      padding-bottom 30%
    span
      position absolute
      color white
      text-shadow 0 0 .25rem black
      top 50%
      left 50%
      transform translate(150%, -50%)
  h3
    border-bottom 1px solid #eee
    margin-top 1rem
    padding .25rem 0
  ul
    margin-top .5rem
    li
      padding .5rem
</style>
