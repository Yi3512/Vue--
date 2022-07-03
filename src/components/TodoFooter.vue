<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          @click="change('all')"
          href="javascript:;"
          >全部</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isSel == 'no' }"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isSel == 'yes' }"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="dele">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel: "all",
    };
  },
  methods: {
    change(val) {
      this.isSel = val;

      this.$emit('fliterdata',val)
    },
    dele(){
      this.$emit('dele')
    }
  },
  props: ["count"],
};
</script>