<template>
  <div class="result">
    <img src="../assets/images/red.jpg" v-if="back == 'red'" width="100%" height="100%" />
    <img src="../assets/images/blue.jpg" v-if="back == 'blue'" width="100%" height="100%" />
    <img src="../assets/images/green.jpg" v-if="back == 'green'" width="100%" height="100%" />
    <img src="../assets/images/purple.jpg" v-if="back == 'purple'" width="100%" height="100%" />
    <img src="../assets/images/orange.jpg" v-if="back == 'orange'" width="100%" height="100%" />

    <van-popup v-model="show" class="pop" position="top" round>
      <img src="../assets/images/arrow.png" width="50%" height="70%" />
      <p class="parm">立即分享给好友吧</p>
      <p class="parm">点击屏幕右上角将本页面分享给好友</p>
    </van-popup>
    <div class="share" @click="share()"></div>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      show: false,
      back: localStorage.getItem("back")
    };
  },

  computed: {
    title() {
      if (this.back == "red") {
        return "原来我是华工热血青年";
      } else if (this.back == "blue") {
        return "原来我是华工学霸青年";
      } else if (this.back == "purple") {
        return "原来我是华工文艺青年";
      } else if (this.back == "orange") {
        return "原来我是华工爱心天使";
      } else {
        return "原来我是华工小可爱";
      }
    }
  },

  mounted() {
    this.axios
      .get("/haha")
      .then(function(res) {
        wx.config({
          debug: false,
          appId: "wx72dcc0c8ae1265f9",
          timestamp: res.data.timestamp,
          nonceStr: res.data.noncestr,
          signature: res.data.signature,
          jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    let that = this;
    wx.ready(function() {
      wx.updateTimelineShareData({
        title: that.title,
        link: "http://www.kalaplay.com.cn/result",
        imgUrl:
          "https://fengpu1351-1300303301.cos.ap-guangzhou.myqcloud.com/%E5%A5%87%E5%A6%99%E5%AD%A6%E7%90%B4%E8%AE%B0/index3.jpg",
        success: function() {
          console.log("成功");
        }
      });
    });

    wx.ready(function() {
      wx.updateAppMessageShareData({
        title: that.title,
        desc: that.title,
        link: "http://www.kalaplay.com.cn/result",
        imgUrl:
          "https://fengpu1351-1300303301.cos.ap-guangzhou.myqcloud.com/%E5%A5%87%E5%A6%99%E5%AD%A6%E7%90%B4%E8%AE%B0/index3.jpg",
        success: function() {
          console.log("成功");
        }
      });
    });

    wx.error(function(res) {
      console.log(res);
    });
  },

  methods: {
    share() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.result {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -100;
}
.red {
  background: url("../assets/images/red.jpg");
  background-size: 100% 100%;
}
.green {
  background: url("../assets/images/green.jpg");
  background-size: 100% 100%;
}
.orange {
  background: url("../assets/images/orange.jpg");
  background-size: 100% 100%;
}
.blue {
  background: url("../assets/images/blue.jpg");
  background-size: 100% 100%;
}
.purple {
  background: url("../assets/images/purple.jpg");
  background-size: 100% 100%;
}
.share {
  position: absolute;
  bottom: 2%;
  left: 4%;
  width: 50%;
  height: 6%;
  z-index: 1000;
}
.pop {
  width: 100%;
  height: 40%;
}
.parm {
  font-size: 18px;
  font-weight: bold;
  line-height: 200%;
  color: rgb(66, 173, 223);
}
</style>