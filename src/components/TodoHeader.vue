<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  computed: {
    isAll: {
      set(checked) {
        this.$emit("setchecked", checked);
      },
      get() {
        return this.$parent.list.every((ele) => ele.isDone);
      },
    },
  },
  methods: {
    enter() {
      if (this.task.length == 0) {
        return alert("Please enter a task");
      }
      this.$emit("add", this.task);
      this.task = "";
    },
  },
};
</script>

<style scoped>
/* h1 {
  color: #b83f45;
  text-align: center;
  font-size: 50px;
} */
</style>