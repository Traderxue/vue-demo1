<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { init, dispose } from 'klinecharts'

const timeData = ref([
  {
    time:"1M"
  },
  {
    time:"5M"
  },
  {
    time:"15M"
  },
  {
    time:"30M"
  },
  {
    time:"1H"
  },
  {
    time:"4H"
  },
  {
    time:"分时"
  }
])

const router = useRouter()

const goBack = ()=>{
    router.back()
}
</script>

<template>
  <div class="chart">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack"> arrow_back_ios </span>
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
        <span v-for="(item,index) in timeData" :key="index">{{item.time}}</span>
      </div>
      <div class="kline_box" style="width: 100%;height: 480px;">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart{
    width: auto;
    height: 100vh;
    background: #1B2C42;
    padding: 15px;
    box-sizing: border-box;
    .header{
        width: auto;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: #FFF;
        position: relative;
        padding: 5px;
        .arrow{
            position: absolute;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .banner{
      display: flex;
      justify-content: space-between;
      margin: 15px 0px;
      div{
        width: 33%;
        text-align: center;
      }
      .left{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        color: #FC6668;
        p{
          font-weight: 600;
          font-size: 18px;
        }
        span{
          font-size: 13px;
        }
      }
      .mid{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        span{
          color: #909399;
          font-size: 13px;
        }        
      }
      .right{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        span{
          color: #FFF;
          font-size: 13px;
        }
      }
    }
    .chart_box{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      margin: 15px 0px;
      .time{
        display: flex;
        justify-content: space-around;
        color: #CCC;
        font-size: 15px;
      }
    }
}
</style>