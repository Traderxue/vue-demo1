<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const active = ref("自选");

const nvaData = ref([
  {
    title: "自选",
    path: "/optional",
  },
  {
    title: "USDT",
    path: "/usdt",
  },
  {
    title: "BTC",
    path: "/btc",
  },
  {
    title: "ETH",
    path: "/eth",
  },
]);

const goTab = (item) => {
  active.value = item.title;
  router.push(item.path);
};
</script>

<template>
  <div class="home">
    <div class="header">
      <span>行情</span>
    </div>
    <div class="nav">
      <span
        v-for="(item, index) in nvaData"
        :key="index"
        :class="active === item.title ? 'active' : ''"
        @click="goTab(item)"
        >{{ item.title }}</span
      >
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: 100vh;
  background: #13161d;
  padding: 15px;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ccc;
    background: #1a212a;
    margin: -15px;
    padding: 15px;
  }
  .nav {
    width: auto;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ccc;
    background: #1a212a;
    padding: 15px;
    margin: 20px -15px;
    span {
      width: 25%;
      text-align: center;
      padding: 5px 0px;
      font-size: 14px;
    }
    .active {
      color: #1a73ec;
      font-weight: 600;
    }
  }
}
</style>