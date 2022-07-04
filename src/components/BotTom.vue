<template>
  <div id="Bottom">
    <input type="text" name="" id="" placeholder="书名" />
    <br />
    <input type="text" name="" id="" placeholder="作者" />
    <br />
    <input type="text" name="" id="" placeholder="出版社" />
    <br />
    <button>新增</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
input {
  margin-bottom: 10px;
  height: 20px;
  border: 1px solid #c5ccd3;
  border-radius: 3px;
  color: #757575;
  font-size: 12px;
}
input::placeholder {
  padding-left: 10px;
}
#Bottom {
  margin-top: 10px;
}
#Bottom input {
  margin-bottom: 15px;
}
#Bottom button {
  width: 60px;
  height: 30px;
  border: 0 solid;
  border-radius: 5px;
  font-size: 15px;
  background-color: #0b6dfd;
  color: #ffffff;
}
</style>