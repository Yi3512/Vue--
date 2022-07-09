<template>
  <div>
    <div class="op">
      <router-link to="/index">首页</router-link>
      <router-link to="/add">分类</router-link>
      <router-link to="/dpp">订单</router-link>
      <router-link to="/oee">我的</router-link>
    </div>
    <h1>显示路由切换的页面</h1>
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
.router-link-active {
}
</style>