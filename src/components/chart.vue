<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { init, dispose } from "klinecharts";

const timeData = ref([
  {
    time: "1M",
    chart_data: [
      {
        close: 10,
        high: 15,
        low: 8,
        open: 9,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 12,
        high: 14,
        low: 10,
        open: 11,
        timestamp: 1609375200000,
        volume: 189,
      },
      {
        close: 8,
        high: 13,
        low: 6,
        open: 9,
        timestamp: 1623016800000,
        volume: 215,
      },
      {
        close: 16,
        high: 18,
        low: 12,
        open: 14,
        timestamp: 1636543200000,
        volume: 197,
      },
    ],
  },
  {
    time: "5M",
    chart_data: [
      {
        close: 11,
        high: 16,
        low: 9,
        open: 10,
        timestamp: 1640089600000,
        volume: 221,
      },
      {
        close: 14,
        high: 17,
        low: 12,
        open: 13,
        timestamp: 1653621600000,
        volume: 185,
      },
      {
        close: 10,
        high: 14,
        low: 8,
        open: 11,
        timestamp: 1667157600000,
        volume: 203,
      },
      {
        close: 13,
        high: 18,
        low: 11,
        open: 12,
        timestamp: 1680693600000,
        volume: 196,
      },
    ],
  },
  {
    time: "15M",
    chart_data: [
      {
        close: 16,
        high: 19,
        low: 14,
        open: 15,
        timestamp: 1734840000000,
        volume: 190,
      },
      {
        close: 12,
        high: 16,
        low: 10,
        open: 11,
        timestamp: 1721308000000,
        volume: 201,
      },
      {
        close: 15,
        high: 20,
        low: 12,
        open: 14,
        timestamp: 1707772000000,
        volume: 185,
      },
      {
        close: 9,
        high: 12,
        low: 7,
        open: 8,
        timestamp: 1694236000000,
        volume: 210,
      },
    ],
  },
  {
    time: "30M",
    chart_data: [
      {
        close: 14,
        high: 17,
        low: 12,
        open: 13,
        timestamp: 1748376000000,
        volume: 195,
      },
      {
        close: 11,
        high: 15,
        low: 10,
        open: 12,
        timestamp: 1761912000000,
        volume: 203,
      },
      {
        close: 17,
        high: 20,
        low: 14,
        open: 16,
        timestamp: 1775448000000,
        volume: 188,
      },
      {
        close: 10,
        high: 13,
        low: 9,
        open: 11,
        timestamp: 1788980000000,
        volume: 210,
      },
    ],
  },
  {
    time: "1H",
    chart_data: [
      {
        close: 13,
        high: 18,
        low: 12,
        open: 14,
        timestamp: 1802516000000,
        volume: 199,
      },
      {
        close: 9,
        high: 12,
        low: 7,
        open: 10,
        timestamp: 1816058400000,
        volume: 215,
      },
      {
        close: 15,
        high: 19,
        low: 11,
        open: 13,
        timestamp: 1829594400000,
        volume: 190,
      },
      {
        close: 14,
        high: 17,
        low: 12,
        open: 13,
        timestamp: 1843130400000,
        volume: 195,
      },
    ],
  },
  {
    time: "4H",
    chart_data: [
      {
        close: 11,
        high: 16,
        low: 10,
        open: 12,
        timestamp: 1856662400000,
        volume: 203,
      },
      {
        close: 16,
        high: 20,
        low: 14,
        open: 15,
        timestamp: 1870198400000,
        volume: 188,
      },
      {
        close: 10,
        high: 13,
        low: 9,
        open: 11,
        timestamp: 1883730400000,
        volume: 210,
      },
      {
        close: 12,
        high: 15,
        low: 11,
        open: 14,
        timestamp: 1897262400000,
        volume: 196,
      },
    ],
  },
]);

const router = useRouter();

const active = ref("1M");

const option = {
  grid: {
    show: false,
  },
  crosshair: {
    show: true,
    // 十字光标水平线及文字
    horizontal: {
      show: true,
      line: {
        show: true,
        // 'solid'|'dashed'
        style: "solid",
        dashedValue: [4, 2],
        size: 1,
        color: "#fff",
      },
    },
    vertical: {
      show: true,
      line: {
        show: true,
        // 'solid'|'dashed'
        style: "solid",
        dashedValue: [4, 2],
        size: 1,
        color: "#fff",
      },
    },
  },
};

const goBack = () => {
  router.back();
};

let chart;

onMounted(() => {
  chart = init("kline_box");

  chart.setStyles(option);

  chart.createIndicator("VOL");

  chart.applyNewData(timeData.value[0].chart_data);
});

const tabTime = (item) => {
  active.value = item.time;
  chart.applyNewData(item.chart_data)
};

const goContract = ()=>{
  router.push("/contract")
}
</script>

<template>
  <div class="chart">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>BTC/USDT</span>
    </div>
    <div class="banner">
      <div class="left">
        <p>23462.1</p>
        <span>0.17%</span>
      </div>
      <div class="mid">
        <span>24H最高</span><span>24H最低</span><span>24H量</span>
      </div>
      <div class="right">
        <span>19421.31</span><span>19218.81</span><span>947.72</span>
      </div>
    </div>
    <div class="chart_box">
      <div class="time">
        <span
          v-for="(item, index) in timeData"
          :key="index"
          @click="tabTime(item)"
          :class="active === item.time ? 'active' : ''"
          >{{ item.time }}</span
        >
      </div>
      <div
        class="kline_box"
        id="kline_box"
        style="width: 100%; height: 480px"
      ></div>
    </div>
    <div class="btn">
      <button class="buy" @click="goContract">买入</button>
      <button class="sell" @click="goContract">卖出</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  width: auto;
  height: 100vh;
  background: #1b2c42;
  padding: 15px;
  box-sizing: border-box;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
    color: #fff;
    position: relative;
    padding: 5px;
    .arrow {
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .banner {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    div {
      width: 33%;
      text-align: center;
    }
    .left {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      color: #fc6668;
      p {
        font-weight: 600;
        font-size: 18px;
      }
      span {
        font-size: 13px;
      }
    }
    .mid {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span {
        color: #909399;
        font-size: 13px;
      }
    }
    .right {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span {
        color: #fff;
        font-size: 13px;
      }
    }
  }
  .chart_box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 15px 0px;
    .time {
      display: flex;
      justify-content: space-around;
      color: #ccc;
      font-size: 15px;
    }
    .kline_box {
      margin: 15px 0px;
    }
  }
  .active {
    color: #1a73e8;
  }
  .btn{
    position: fixed;
    bottom: 55px;
    height: 40px;
    width: 90%;
    display: flex;
    justify-content: space-around;
    button{
      width: 40%;
      height: 40px;
      border: 0;
      border-radius: 3px;
      color: #ccc;
    }
    .buy{
      background: #26A69A;
    }
    .sell{
      background:#fc6668;
    }
  }
}
</style>