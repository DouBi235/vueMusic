<template>
  <div class="m-header">
    <span class="icon"></span>
    <span class="text">Chicken Music</span>
  </div>
</template>

<script>
export default {
  name: 'm-header',
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin.styl'
.m-header
  height: 44px
  text-align: center
  line-height: 44px
  color: $color-theme
  /*font-size: 0*/
  .icon
    width: 30px
    height: 34px
    bg-image('logo')
    background-size: 30px 32px
    display: inline-block
    vertical-align: middle
    margin:0 4px 4px 0
  .text
    font-size: $font-size-large

</style>
