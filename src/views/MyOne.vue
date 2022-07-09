<template>
<div>
  <h2>二级嵌套</h2>
    <div class="ol">
    <router-link to="/one/onefn">首页</router-link>
    <router-link to="/one/twofn">新闻</router-link>
    <router-link to="/one/threefn">定位</router-link>
    <router-link to="/one/fourfn">安东尼</router-link>
  </div>
      <div>
      <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.ol {
  width: 300px;
  display: flex;
  justify-content: space-around;
}
</style>