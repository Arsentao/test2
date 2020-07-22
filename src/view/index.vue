<template>
  <div class="index">
    <div class="btnReview" @click="routerChange()"></div>
  </div>
</template>

<script>
export default {
  methods: {
    routerChange() {
      this.$router.replace("/select");
    }
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("https://fengpu1351-1300303301.cos.ap-guangzhou.myqcloud.com/%E5%A5%87%E5%A6%99%E5%AD%A6%E7%90%B4%E8%AE%B0/index3.jpg");
  background-size: 100% 100%;
  z-index: -100;
}
.btnReview {
  width: 65%;
  height: 14%;
  position: absolute;
  bottom: 3.5%;
  right: 11%;
}
</style>