<template>
  <div class="my-header" :style="{ backgroundColor: background, color }">
    购物车案例
  </div>
</template>

<script>
export default {
  props: {
    background: String, //外部插入此变量的值, 必须是字符串类型, 否则报错
    color: {
      type: String,
      default: "#fff",
    },
    title: {
      type: String,
      require: true, //必须传入此变量的值
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  // padding-bottom: 50px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>