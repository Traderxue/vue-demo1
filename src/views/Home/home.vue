<script setup>
import { ref } from "vue";

const listData = ref([
    {
        type:"BTC",
        volume:"6784.69",
        price:"4976.36",
        parcent:"+1.6%",
        up:0
    },
    {
        type:"ETH",
        volume:"6784.69",
        price:"1976.36",
        parcent:"+1.6%",
        up:1
    },
    {
        type:"APE",
        volume:"6784.69",
        price:"2.36",
        parcent:"+1.6%",
        up:1
    },
    {
        type:"DOGE",
        volume:"6784.69",
        price:"0.0236",
        parcent:"+1.6%",
        up:0
    }
])
</script>

<template>
  <div class="home">
    <div class="title">
      <!-- <img src="@/assets/img/logo1.png" alt="" /> -->
      <span>Bizzan.com</span>
      <span class="material-symbols-outlined"> sms </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#1a212a"
        color="#F5F5F5"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <div class="assets">
      <div class="top">
        <p>我的资产</p>
        <span>总资产约(折合USDT)</span>
        <p>$ 64342.69</p>        
        <img src="@/assets/img/wallet_bg.png" alt="">
      </div>
      <div class="bottom">
        <div class="left">
            <p>帮助</p>
            <span>问题/指南/资料</span>
            <img src="@/assets/img/wallet_bg_1.png" alt="">
        </div>
        <div class="right">
            <p>公告</p>
            <span>新闻/活动/咨询</span>
            <img src="@/assets/img/wallet_bg_2.png" alt="">
        </div>
      </div>
    </div>
    <div class="btc">
        <div>
            <p>BTC/USDT</p>
            <span>63912.66</span>
            <span>+3.12%</span>
        </div>
        <div>
            <p>ETH/USDT</p>
            <span>1864.66</span>
            <span>+1.12%</span>
        </div>
        <div>
            <p>APE/USDT</p>
            <span>2.66</span>
            <span>+2.12%</span>
        </div>
    </div>
    <div class="main">
        <span>涨幅榜</span>
        <div class="box" v-for="(item,index) in listData" :key="index">
            <div>
                <span>{{item.type}}/USDT</span>
                <p>24H量{{item.volume}}</p>
            </div>
            <span class="price" :class="item.up?'up':'down'">{{item.price}}</span>
            <span class="parcent" :class="item.up?'up_parcent':'down_parcent'">{{item.parcent}}</span>            
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p{
    margin: 0;
}
.home {
  width: auto;
  height: auto;
  background: #13161d;
  padding: 15px 15px 70px 15px;
  .title {
    display: flex;
    justify-content: space-between;
    color: #fff;
    span{
      font-weight: 600;
      line-height: 25px;
    }
    img {
      width: auto;
      height: 25px;
    }
  }
  .banner {
    width: auto;
    height: 180px;
    overflow: hidden;
    margin: 20px 0px;
    img {
      width: 100%;
      height: 180px;
      border-radius: 3px;
    }
  }
  .notice{
    border-radius: 3px;
  }
  .assets {
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: auto;
    height: 200px;
    .top{
        width: auto;
        height: 50%;
        background: #1a212a;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: relative;
        border-radius: 3px;
        p{
            margin: 3px 0px;
            color: #E5E5E5;
            font-size: 15px;
        }
        span{
            color: #939494;
            font-size: 13px;
        }
        img{
            width: 60px;
            height: 60px;
            position: absolute;
            right: 25px ;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        height: 45%;
        div{
            width: 49%;
            background: #1a212a;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            position: relative;
            border-radius: 3px;
            img{
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                height: 40px;
            }
            p{
                color: #E5E5E5;
                font-size: 15px;
            }
            span{
                color: #939494;
                font-size: 13px;
            }
        }
    }
  }
  .btc{
    width: auto;
    height: 120px;
    margin: 10px 0px;
    background: #1a212a;
    display: flex;
    justify-content: space-around;
    div{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        text-align: center;
        p{
            color: #E5E5E5;
            font-size: 14px;
            font-weight: 600;
        }
        span{
            color: #00B275;
            font-weight: 17px;
            font-weight: 600;
        }
    }
  }
  .main{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #1a212a;
    text-align: center;
    margin: 15px 0px;
    padding: 10px 0px;
    color: #E5E5E5;
    .box{
        margin: 15px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px;
        div{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            span{
                font-size: 15px;
                font-weight: 600;
            }
            p{
                font-size: 13px;
                color: #939494;
                padding: 5px 0px;
            }
        }
        .up{
            color: #00B275;
        }
        .up_parcent{
            background: #00B275;
        }
        .down{
            color: #F15057;
        }
        .down_parcent{
            background: #F15057;
        }
        .parcent{
            width: 70px;
            height: 35px;
            color: #E5E5E5;
            text-align: center;
            line-height: 35px;
            font-size: 14px;
            border-radius: 2px;
            font-weight: 600;
        }
    }
  }
}
</style>