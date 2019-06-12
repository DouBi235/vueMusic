<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend" >
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer" >
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank" >
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search" >
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'
.tab
  height: 44px
  line-height: 44px
  display: flex
  .tab-item
    flex: 1
    -webkit-box-flex: 1
    text-align: center
    font-size: $font-size-medium
    color: $color-text-1
    .tab-link
      padding-bottom: 5px
    &.router-link-active
      .tab-link
        color: $color-theme
        border-bottom: 2px solid $color-theme

</style>
