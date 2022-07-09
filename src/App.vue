<template>
  <div>
    <h1>嵌套路由</h1>
    <div class="op">
      <router-link to="/add">首页</router-link>
      <router-link to="/arr">新闻</router-link>
      <router-link to="/one">体育</router-link>
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
.op {
  width: 300px;
  display: flex;
  justify-content: space-around;
}
</style>