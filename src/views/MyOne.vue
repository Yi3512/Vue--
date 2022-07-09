<template>
  <div>
    <div class="ol">
      <ul>
        <li><span @click="btn('/one/onefn', 'onefn')">All contacts</span></li>
        <li><span @click="btn('/one/twofn', 'twofn')">Alice</span></li>
        <li><span @click="btn('/one/threefn', 'threefn')">Bob</span></li>
      </ul>
      <button @click="app">随机显示</button>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["onefn", "twofn", "threefn"],
    };
  },
  methods: {
    btn(targetPath, targetName) {
      this.$router.push({
        name: targetName,
      });
    },
    app() {
      this.$router.push({
        name: this.arr[Math.floor(Math.random(0, 1) * 3)],
      });
      console.log(Math.floor(Math.random(0, 1) * 3));
    },
  },
};
</script>

<style>
.ol ul li span {
  color: blue;
  border-bottom: 1px solid blue;
}
</style>