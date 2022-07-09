<template>
  <div>
    <div class="op">
      <router-link to="/add">UI-Router</router-link>
      <router-link to="/one">Contacts</router-link>
      <router-link to="/arr">About</router-link>
    </div>
    <hr />
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