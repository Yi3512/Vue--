<template>
  <div>
    <h1>Box</h1>
    <div>
      <ul>
        <li><router-link to="/one/threefn/blog">blog</router-link></li>
        <li><router-link to="/one/threefn/fax">fax</router-link></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>