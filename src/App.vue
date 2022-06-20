<template>
  <div>
    <MyHeader title="购物车案例"></MyHeader>
    <br />
    <br />
    <MyGoods v-for="obj in list" :key="obj.id" :gObj="obj"></MyGoods>
    <br />
    <br />
    <MyFooter :arr="list" @changeAll="changeAll"></MyFooter>
  </div>
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyGoods from "./components/MyGoods.vue";
import MyCount from "./components/MyCount.vue";
export default {
  name: "",
  data() {
    return {
      list: [], //商品所有数据
    };
  },
  components: {
    MyHeader,
    MyCount,
    MyGoods,
    MyFooter,
  },
  created() {
    // 最早可以访问到data和methods里面内容的钩子
    // 页面一渲染完成就发一次请求
    // 这里可以直接使用全局属性的$axios
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      // console.log(res);
      this.list = res.data.list;
      // console.log(this.list);
    });
  },
  methods: {
    changeAll(bool) {
      this.list.forEach((obj) => (obj.goods_state = bool));
      // console.log(this.list);
    },
  },
};
</script>
<style lang='less' scoped>
</style>