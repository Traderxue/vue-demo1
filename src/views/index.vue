<script setup>
import { ref } from "vue";
import {showToast} from "vant"

const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};
const active = ref(0);
</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>
    <van-tabbar
      v-model="active"
      route
      active-color="#29A1F7"
      inactive-color="#CCCCCC"
    >
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span>
        <br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/trade">
        <span class="material-symbols-outlined"> monitoring </span>
        <br />
        <span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item to="/contract">
        <span class="material-symbols-outlined"> list_alt </span>
        <br />
        <span>合约</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span>
        <br />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.van-tabbar) {
  background: #1a212a;
  padding: 5px 0px;
}

::v-deep(.van-tabbar-item) {
  background: #1a212a;
}
</style>