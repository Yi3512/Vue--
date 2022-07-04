<template>
  <div>
    <head-fn></head-fn>
    <form-fn :list='list'></form-fn>
    <bot-tom></bot-tom>
  </div>
</template>

<script>
import BotTom from "./components/BotTom.vue";
import FormFn from "./components/FormFn.vue";
import HeadFn from "./components/HeadFn.vue";

export default {
  components: { BotTom, FormFn, HeadFn },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$axios({
      url: "/api/getbooks",
    }).then((res) => (this.list = res.data.data));
  },
};
</script>

<style>
</style>