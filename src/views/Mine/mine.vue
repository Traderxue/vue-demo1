<script setup>
import { imageProps } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref("币币");

const tabData = ref([
  {
    title: "币币",
    path: "/coin",
  },
  {
    title: "合约",
    path: "/con",
  },
  {
    title: "法币",
    path: "/fb",
  },
  {
    title: "充提",
    path: "/cb",
  },
]);

const tabChange = (item) => {
  active.value = item.title;
  router.push(item.path);
};
</script>


<template>
  <div class="mine">
    <div class="header">
      <span>资产</span>
    </div>
    <div class="banner">
      <p>总资产折合</p>
      <span class="assets">0.00000 USDT</span>
      <p>≈0.00US</p>
      <span class="material-symbols-outlined visibility"> visibility </span>
    </div>
    <div class="card">
      <div>
        <img src="@/assets/img/wallet_1.png" alt="" /> <span>提币</span>
      </div>
      <div>
        <img src="@/assets/img/wallet_2.png" alt="" /> <span>充币</span>
      </div>
      <div>
        <img src="@/assets/img/wallet_3.png" alt="" /> <span>划转</span>
      </div>
    </div>
    <div class="coin">
      <div class="top">
        <span
          v-for="(item, index) in tabData"
          :key="index"
          @click="tabChange(item)"
          :class="active === item.title ? 'active' : ''"
          >{{ item.title }}</span
        >
      </div>
      <div class="main">
        <RouterView class="main_box" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background: #13161d;
  width: auto;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
  .header {
    text-align: center;
    color: #ccc;
    padding: 10px;
  }
  .banner {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    color: #ccc;
    position: relative;
    span {
      font-size: 18px;
      font-weight: 600;
      margin: 10px 0px;
    }
    p {
      font-size: 12px;
    }
    .visibility {
      position: absolute;
      right: 15px;
      top: 0px;
      font-weight: 500;
    }
    .assets {
      color: #1296db;
    }
  }
  .card {
    display: flex;
    justify-content: space-around;
    width: auto;
    height: 70px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      color: #1296db;
      padding: 5px;
      span {
        font-weight: 600;
        font-size: 15px;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .coin {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 15px;
    .top {
      display: flex;
      justify-content: space-around;
      color: #ccc;
      font-size: 15px;
      .active {
        color: #1296db;
        font-weight: 600;
      }
    }
  }
  .main_box {
    margin: 15px 0px;
  }
}
</style>