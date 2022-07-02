<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" name="name" :key="item.id">
        <td><input type="checkbox" v-model="item.bd" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.time }}万</td>
        <td>
          <button @click="app(item.id)">-</button
          ><input type="text" :value="item.count" /><button
            @click="add(item.id)"
          >
            +
          </button>
        </td>
        <td>{{ item.time * item.count }}万</td>
        <td><button @click="del(item)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delCheck">删除选中商品</button>
    <button @click="removeCar">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ checkFn }}</p>
      <p>总价:{{ sumFn || 0 }}万</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // count数量time价格
        { id: 0, name: '奔驰', time: 20, count: 0, bd: false },
        { id: 1, name: '宝马', time: 50, count: 0, bd: false },
        { id: 2, name: '奥迪', time: 30, count: 0, bd: false },
      ],
    };
  },
  methods: {
    //数量增加
    add(id) {
      this.list[id].count++;
    },
    //数量减少
    app(id) {
      if (this.list[id].count <= 0) {
        this.list[id].count = 0;
        alert('不能小于0');
        return;
      }
      this.list[id].count--;
    },
    //清空购物车
    removeCar() {
      this.list.forEach((obj) => {
        obj.count = 0;
      });
    },
    //删除选中
    delCheck() {
      let arr = [];
      this.list.forEach((obj) => {
        if (!obj.bd) {
          arr.push(obj);
        }
      });
      this.list = arr;
      if (this.list.length === 0) {
        this.isAll = false;
      }
      this.isAll = false;
    },
    del(val) {
      this.list.splice(val, 1);
    },
  },
  computed: {
    //全选
    isAll: {
      set(val) {
        this.list.forEach((obj) => (obj.bd = val));
      },
      get() {
        if (this.list.length === 0) {
          return false;
        }
        return this.list.every((obj) => obj.bd);
      },
    },
    //选中多少
    checkFn() {
      let num = 0;
      this.list.forEach((obj) => {
        if (obj.bd) {
          num += obj.count;
        }
      });
      return num;
    },
    //求和
    sumFn() {
      const arr = [];
      this.list.forEach((obj) => {
        if (obj.bd) {
          arr.push(obj);
        }
      });
      return arr.reduce((sum, next) => {
        return (sum += next.time * next.count);
      }, 0);
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}
input {
  text-align: center;
}
.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
