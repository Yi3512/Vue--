<template>
  <div>
    <todo-header @add="addFn" @setchecked="setcheckedFn"> </todo-header>
    <todo-main :list="showlist" @del="delFn"></todo-main>
    <todo-footer
      :count="count"
      @dele="dele"
      @fliterdata="fliterdataFn"
    ></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data() {
    /*  第一步,铺设数据
    1.通过父传子的方式 把数据传过去
    2.子组件props 接受数据
    2.使用v-for 来渲染数据
    3.父组件传数据
   */
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
      getSel: "all",
    };
  },
  methods: {
    //添加
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    //删除
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    //切换数据
    fliterdataFn(val) {
      console.log(val);
      this.getSel = val;
    },
    //清空以=已完成
    dele() {
      this.list = this.list.filter((ele) => ele.isDone == false);
    },
    setcheckedFn(val) {
      this.list.forEach((ele) => (ele.isDone = val));
    },
  },
  computed: {
    //剩余数
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    //显 示
    showlist() {
      if (this.getSel == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val || []));
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>