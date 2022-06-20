<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="isAll"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ Allprice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary" @click="addAll">
      结算 ( {{ countAll }} )
    </button>
  </div>
</template>

<script>
export default {
  props: {
    arr: Array,
  },
  data() {
    return {};
  },
  computed: {
    isAll: {
      set(val) {
        // 这里是我们input给我们的值, 默认为false, 当选中了就为true了
        // 为true了之后就传App组件了, 它会根据我们返回的值进行一个遍历
        // 如果传过去的是false就都为false, 如果为true就会把每一个对象的状态改成true
        // val就是关联表单的值(true/false)
        this.$emit("changeAll", val);
      },
      get() {
        // 查找小选框关联的属性有没有不符合勾选的条件
        // 这是我们给input设置的值, 这里我们是从App传过来的数组来判段
        // 如果数组对象里面的每一项state都为true的话, 那这里就返回true了
        // 同理, 那么这个input也就被选中了, 如果有一个为false, 那我们返回的也是false
        // 那么这个按钮就不会被选中了
        return this.arr.every((obj) => obj.goods_state === true);
      },
    },
    Allprice() {
      //  结算按钮:
      // 1. 应该是点击了前面的复选框, 就开始计算goods_count的数量, 并将它赋值给结算后面的0
      return this.arr.reduce((num, value) => {
        if (value.goods_state) {
          return (num += value.goods_count * value.goods_price);
        } else {
          return num;
        }
      }, 0);
    },
    countAll() {
      // 合计:
      // 应该是点击了前面的复选框, 就开始计算goods_count*goods_price的值, 并将它动态赋值到合计上
      return this.arr.reduce((num, value) => {
        if (value.goods_state) {
          return (num += value.goods_count);
        } else {
          return num;
        }
      }, 0);
    },
  },
  methods: {
    addAll() {
      alert("下单成功!");
      // 下单成功之后可以选择把数组里面的count和state改成1和false
    },
  },
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>