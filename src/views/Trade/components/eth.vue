<script setup>
import { ref } from "vue";

const listData = ref([
  {
    type: "APE",
    volume: "2562",
    price: "2.41",
    percent: "+6.49%",
    up: 1,
  },
  {
    type: "DOGE",
    volume: "1987",
    price: "0.0576",
    percent: "-5.72%",
    up: 0,
  },
]);
</script>


<template>
  <div class="optional">
    <div class="box" v-for="(item, index) in listData" :key="index">
      <div>
        <span
          >{{ item.type }}
          <p>/ETH</p></span
        >
        <p>24H量{{ item.volume }}</p>
      </div>
      <span class="price" :class="item.up == 1 ? 'up_price' : 'down_price'">{{
        item.price
      }}</span>
      <span class="parcent" :class="item.up == 1 ? 'up' : 'down'">{{
        item.percent
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.optional {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin: 15px 0px;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 33%;
      span {
        color: #fff;
        font-weight: 600;
        p {
          display: inline-block;
        }
      }
      p {
        color: #666;
        font-size: 14px;
      }
    }
    .parcent {
      width: 70px;
      height: 35px;
      color: #fff;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      border-radius: 2px;
    }
    .up {
      background: #02a46d;
    }
    .down {
      background: #f15057;
    }
    .up_price {
      color: #02a46d;
    }
    .down_price {
      color: #f15057;
    }
  }
}
</style>