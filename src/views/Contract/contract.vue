<script setup>
import { ref } from "vue";

const value = ref(1);
</script>
<template>
  <div class="contract">
    <div class="header">
      <span
        >BTC/USDT
        <p>0.05%</p></span
      >
      <span class="material-symbols-outlined candlestick_chart">
        candlestick_chart
      </span>
    </div>
    <div class="main">
      <div class="left">
        <div class="btn">
          <button class="buy">买入</button>
          <button class="sell">卖出</button>
        </div>
        <div>
          <select name="选择杠杆" class="limit_select">
            <option value="10x">10x</option>
            <option value="50x">50x</option>
            <option value="100x">100x</option>
            <option value="200x">200x</option>
          </select>
        </div>
        <van-stepper v-model="value" integer min="0" max="2000000" step="1000" />
        <p class="canuse">可用额度 0.000USDT</p>
        <button class="buybtc">买入BTC</button>
      </div>
      <div class="right">
        <div class="top">
          <sapn>价格(USDT)</sapn>
          <sapn>数量(USDT)</sapn>
        </div>
        <div class="main">
          <div class="sell">
            <div><span>27946.23</span><span>0.25</span></div>
            <div><span>27946.23</span><span>0.25</span></div>
            <div><span>27946.23</span><span>0.25</span></div>
            <div><span>27946.23</span><span>0.25</span></div>
          </div>
          <span class="right_mid">27891.23</span>
          <div class="buy">
            <div><span>26846.61</span><span>1.2</span></div>
            <div><span>26846.61</span><span>1.2</span></div>
            <div><span>26846.61</span><span>1.2</span></div>
            <div><span>26846.61</span><span>1.2</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="entrust">
      <div class="entrust_top">
        <span class="entrust_left">当前委托(0)</span>
        <div>
          <span class="material-symbols-outlined list_alt"> list_alt </span>
          <span>全部</span>
        </div>
      </div>
      <div class="entrust_main">
        <van-empty description="暂无记录" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contract {
  width: auto;
  height: 100vh;
  background: #13161d;
  padding: 15px;
  box-sizing: border-box;
  .header {
    width: auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .candlestick_chart {
      font-size: 22px;
      font-weight: 500;
    }
    span {
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      p {
        color: #12b886;
        display: inline-block;
        padding-left: 10px;
        font-weight: 500;
      }
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px 0px;
    .left {
      width: 45%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .btn {
        button {
          width: 50%;
          height: 40px;
          border: 0;
          font-size: 15px;
          color: #fff;
        }
        .buy {
          background: #12b886;
        }
        .sell {
          background: #f15057;
        }
      }
      .canuse {
        font-size: 12px;
        color: #fff;
      }
      .limit_select {
        width: 100%;
        height: 40px;
        outline: none;
        border: 1px;
        margin: 20px 0px;
        padding-left: 15px;
        font-size: 15px;
      }
      .buybtc {
        width: 100%;
        height: 40px;
        border: 0;
        background: #12b886;
        color: #fff;
      }
    }
    .right {
      width: 45%;
      box-sizing: border-box;
      .top {
        width: auto;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #f5f5f5;
        font-size: 13px;
      }
      .main {
        width: auto;
        height: 250px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .sell {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          color: #f15057;
          div {
            margin: 5px 0px;
            display: flex;
            justify-content: space-between;
          }
        }
        .right_mid {
          font-weight: 600;
          font-size: 18px;
          color: #12b886;
          margin: 10px 0px;
        }
        .buy {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          color: #12b886;
          div {
            margin: 5px 0px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .entrust{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    color: #f5f5f5;
    margin-top: 20px;
    .entrust_top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .entrust_left{
        font-size: 18px;
      }
      div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .list_alt{
          font-size: 20px;
          padding-right: 5px;
        }
      }
    }
  }
}
:deep(.van-stepper) {
  width: 100%;
  .van-stepper__input {
    margin: 0;
  }
  .van-stepper__input {
    width: 50%;
    height: 40px;
    font-size: 15px;
  }
  .van-stepper__minus {
    width: 25%;
    height: 40px;
    border-radius: 0;
  }
  .van-stepper__plus {
    width: 25%;
    height: 40px;
    border-radius: 0;
  }
}
</style>