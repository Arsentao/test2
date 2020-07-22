<template>
  <div class="select">
    <div class="cards">
      <div class="card" v-for="(item,index) in list" :key="index" @click="cardClick(index)">
        <div class="imgBlock">
          <img :src="item.url" class="showImg" />
          <img src="../assets/images/cross.png" v-show="item.select" class="cross" />
        </div>
        <p class="title">{{item.title}}</p>
        <p class="info">{{item.info}}</p>
        <p>&nbsp;</p>
      </div>
    </div>
    <div class="count">{{count}}</div>
    <div class="enter" @click="routerChange()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      selectList: [],
      list: [
        {
          id: 1,
          title: "爱上女主播",
          info: "别看我们是理工科学校，文艺活动和有才华的同学一样不少~",
          color: "green",
          url: require("../assets/images/1.jpg"),
          select: false
        },
        {
          id: 2,
          title: "百团大战",
          info: "支教、橄榄球、轮滑、街舞、武术……在百团大战的场地上，优秀的社团们为招新争奇斗艳，一展风采。",
          color: "green",
          url: require("../assets/images/2.jpg"),
          select: false
        },
        {
          id: 3,
          title: "“不忘初心、青春誓言”系列微视频",
          info:
            "四部微视频作品由华工人自编自导自演，看过人生千种姿态，走过世间万重山水，每一种青春味道都饱含着华工学子的初心与对家国的深情。",
          color: "red",
          url: require("../assets/images/3.jpg"),
          select: false
        },
        {
          id: 4,
          title: "“重走长征路”社会实践活动",
          info: "回顾昔日峥嵘岁月，重温历史奋进精神。",
          color: "redgreen",
          url: require("../assets/images/4.jpg"),
          select: false
        },
        {
          id: 5,
          title: "春运志愿服务活动",
          info:
            "穿上马甲的志愿者们，用一个个手势、一句句言语传达着冬日里最暖心的温情。",
          color: "orange",
          url: require("../assets/images/5.jpg"),
          select: false
        },
        {
          id: 6,
          title: "大型原创多媒体全景式话剧《红色甲工 血色浪漫》",
          info: "第一场华工原创多媒体全景式话剧，重现百年前周文雍与陈铁军的感人故事。",
          color: "red",
          url: require("../assets/images/6.jpg"),
          select: false
        },
        {
          id: 7,
          title: "雕刻时光",
          info: "在雕刻时光电影文化节上一饱眼福的华工学子，也在荧光夜跑活动中收获了友谊与快乐。",
          color: "green",
          url: require("../assets/images/7.jpg"),
          select: false
        },
        {
          id: 8,
          title: "“奋斗的青春最美丽”五四线上主题团日活动",
          info:
            "最美华工人分享了他们的抗疫“逆行”故事，章熙春书记也在直播中寄语广大华工青年绽放最美芳华。",
          color: "green",
          url: require("../assets/images/8.jpg"),
          select: false
        },
        {
          id: 9,
          title: "“感动华园”年度人物评选活动",
          info:
            "在身边发掘感动，让前进的力量再次播撒。",
          color: "green",
          url: require("../assets/images/9.jpg"),
          select: false
        },
        {
          id: 10,
          title: "公益文化节",
          info:
            "帮助他人，贡献温暖，让志愿服务走近每个人，让精彩和感动一直延续。",
          color: "green",
          url: require("../assets/images/10.jpg"),
          select: false
        },
        {
          id: 11,
          title: "广东省话剧院大型原创话剧《信仰》华南理工大学专场",
          info:
            "高雅艺术进校园活动，这次走进中国共产党早期优秀的理论家和革命先驱杨匏安的世界。",
          color: "redpurple",
          url: require("../assets/images/11.jpg"),
          select: false
        },
        {
          id: 12,
          title: "广州芭蕾舞团华南理工大学专场演出",
          info:
            "曼妙的舞姿，精心的编排，舞蹈演员们为广大师生呈现了一场惊艳的视觉盛宴。",
          color: "purple",
          url: require("../assets/images/12.jpg"),
          select: false
        },
        {
          id: 13,
          title: "广州马拉松志愿服务",
          info:
            "发扬广马精神，为广马保驾护航；弘扬广州精神，展现广州志愿者风采。",
          color: "orange",
          url: require("../assets/images/13.jpg"),
          select: false
        },
        {
          id: 14,
          title: "寒假社会实践活动",
          info:
            "利用寒假假期在实践中切实感受国家经济社会发展的新成就新面貌，在社会实践中受教育、长才干、做贡献。",
          color: "green",
          url: require("../assets/images/14.jpg"),
          select: false
        },

        {
          id: 15,
          title: "红色经典演绎大赛总决赛",
          info: "精美的舞蹈、激昂的朗诵、悠扬的歌声，带领大家在重温历史记忆中传承红色圣火。",
          color: "green",
          url: require("../assets/images/15.jpg"),
          select: false
        },
        {
          id: 16,
          title: "华南理工大学校运会",
          info:
            "这里是力量的赛场，是友谊的赛场，也是青春的赛场。",
          color: "green",
          url: require("../assets/images/16.jpg"),
          select: false
        },
        {
          id: 17,
          title: "华南理工大学校友返校日系列活动",
          info:
            "第七个返校日来临之际，校友们多年后重逢相聚，再游校园，重温情谊。",
          color: "green",
          url: require("../assets/images/17.jpg"),
          select: false
        },
        {
          id: 18,
          title: "“华音初上”校园歌手大赛",
          info:
            "炫目的灯光，动情的演唱。每一场表演，每一年比赛，都不容错过。",
          color: "green",
          url: require("../assets/images/18.jpg"),
          select: false
        },
        {
          id: 19,
          title: "纪念五四运动100周年表彰晚会",
          info: "弘扬五四精神，发扬优秀文化。华园青年的热情，燃放在这个绚丽的舞台上。",
          color: "red",
          url: require("../assets/images/19.jpg"),
          select: false
        },
        {
          id: 20,
          title: "纪念五四运动100周年主题团日暨升旗仪式",
          info: "大学城校区图书馆广场上汇聚着各学院师生代表，以这场特别的主题团日活动向百年前的青年奋斗者们致敬。",
          color: "red",
          url: require("../assets/images/20.jpg"),
          select: false
        },
        {
          id: 21,
          title: "“两个一百年奋斗目标与青年使命”专题思政课",
          info:
            "坚定理想信念、勇担时代使命。",
          color: "red",
          url: require("../assets/images/21.jpg"),
          select: false
        },
        {
          id: 22,
          title: "《美丽中国》舞蹈专场演出",
          info:
            "艺术学院原创专场舞蹈校内展演《美丽中国》，带领师生们身临其境般领略了中国各地美丽的风土人情。",
          color: "purple",
          url: require("../assets/images/22.jpg"),
          select: false
        },
        {
          id: 23,
          title:
            "美食文化节",
          info: "丰富的美食，精彩的表演，好玩的游戏，都在美食文化节里",
          color: "green",
          url: require("../assets/images/23.jpg"),
          select: false
        },
        {
          id: 24,
          title: "“青年大学习”之两会时刻",
          info: "这些年轻的面孔，炯炯有神的眼睛都在为更美好的未来贡献着自己的青春力量。",
          color: "red",
          url: require("../assets/images/24.jpg"),
          select: false
        },
        {
          id: 25,
          title: "庆祝中华人民共和国成立70周年升旗仪式",
          info:
            "五山、大学城、广州国际校区一同隆重举行升国旗仪式，向祖国母亲献上最真诚的节日祝福和青春告白。",
          color: "red",
          url: require("../assets/images/25.jpg"),
          select: false
        },
        {
          id: 26,
          title: "“三走”体育嘉年华",
          info:
            "组队刷本，与小伙伴们一起破冰！",
          color: "green",
          url: require("../assets/images/26.jpg"),
          select: false
        },
        {
          id: 27,
          title: "“赏中华诗词·承千年文脉”华园诗词大会",
          info: "谁说理工学子不解风情，不懂浪漫？诗词大会上，平日里埋头于科研和实验的同学们也能大展身手，秀出才艺！",
          color: "purple",
          url: require("../assets/images/27.jpg"),
          select: false
        },
        {
          id: 28,
          title: "暑假“三下乡”社会实践活动",
          info:
            "暑期开展支教、调研、宣讲等多类形式的实践活动，每一寸土地，都吸引着华工学子勤奋的脚步和耕耘。",
          color: "green",
          url: require("../assets/images/28.jpg"),
          select: false
        },
        {
          id: 29,
          title: "社团文化节",
          info: "各式各样的社团，精彩纷呈的展示。",
          color: "green",
          url: require("../assets/images/29.jpg"),
          select: false
        },
        {
          id: 30,
          title: "十大提案",
          info: "做自己的主人，为学校发展规划建言献策，帮助母校一点点变得越来越好。",
          color: "green",
          url: require("../assets/images/30.jpg"),
          select: false
        },
        {
          id: 31,
          title: "“十大学生共产党员、共青团员标兵”评选",
          info:
            "榜样的力量永不过时，向前的脚步从未停下。",
          color: "red",
          url: require("../assets/images/31.jpg"),
          select: false
        },
        {
          id: 32,
          title: "“十佳学生社团”评选",
          info:
            "华工的社团们不只有乐趣，更有实力！",
          color: "green",
          url: require("../assets/images/32.jpg"),
          select: false
        },
        {
          id: 33,
          title: "世界羽联巡回赛志愿服务",
          info: "世界羽联巡回赛高手过招，精彩纷呈，当然也少不了我们华工志愿者默默付出的身影。",
          color: "orange",
          url: require("../assets/images/33.jpg"),
          select: false
        },
        {
          id: 34,
          title: "“挑战杯”大学生课外学术科技作品竞赛",
          info:
            "灵感、努力、合作，智慧的光辉正在闪闪发亮。",
          color: "blue",
          url: require("../assets/images/34.jpg"),
          select: false
        },
        {
          id: 35,
          title: "团支部风采大赛",
          info: "营造基层团支部健康、积极、乐观、向上形象，show出每个团支部独特风采~",
          color: "green",
          url: require("../assets/images/35.jpg"),
          select: false
        },
        {
          id: 36,
          title: "新生军训",
          info:
            "时值一月的军训，是来到华工之后独特而新奇的体验。",
          color: "green",
          url: require("../assets/images/36.jpg"),
          select: false
        },

        {
          id: 37,
          title: "学生毕业典礼",
          info: "用一场难忘的毕业典礼祝愿所有学子前程似锦，未来可期。",
          color: "green",
          url: require("../assets/images/37.jpg"),
          select: false
        },

        {
          id: 38,
          title: "校长思政第一课",
          info: "高松校长亲自来到大学城校区音乐厅，为师生们讲述华南理工大学百年办学历史，深厚传统文化。",
          color: "red",
          url: require("../assets/images/38.jpg"),
          select: false
        },
        {
          id: 39,
          title: "与信仰对话——新时代国旗文化的使命",
          info:
            "原天安门国旗班第八任班长赵新风同志来到华园，向师生们播撒对五星红旗的信仰和对祖国的热爱。",
          color: "red",
          url: require("../assets/images/39.jpg"),
          select: false
        },
        {
          id: 40,
          title: "原创话剧《星星之火》演出",
          info:
            "声情并茂的演出让观众们在真实历史中感受革命先辈的英勇无畏。",
          color: "redpurple",
          url: require("../assets/images/40.jpg"),
          select: false
        },
        {
          id: 41,
          title: "志愿服务一条街",
          info:
            "形式多样的志愿服务，在这里都能一饱眼福，乐趣横生。只有你想不到，没有志愿者们办不到。",
          color: "orange",
          url: require("../assets/images/41.jpg"),
          select: false
        },
        {
          id: 42,
          title: "中央民族歌舞团走进华南理工大学专场演出",
          info:
            "各样的民族特色在中央民族歌舞团的表演中发挥得淋漓尽致，让师生们领略到鲜活的多彩文化。",
          color: "purple",
          url: require("../assets/images/42.jpg"),
          select: false
        },
        {
          id: 43,
          title: "助力学校捧得“挑战杯”全国赛“优胜杯”",
          info:
            "用创新展现青春底色，优秀学子再创佳绩。",
          color: "blue",
          url: require("../assets/images/43.jpg"),
          select: false
        },
        {
          id: 44,
          title: "走近诺贝尔学术报告会",
          info:
            "2019年诺贝尔生理学或医学奖获得者Gregg L. Semenza（格雷格·塞门扎）院士为华工师生们带来了一场生动的学术报告会。",
          color: "blue",
          url: require("../assets/images/44.jpg"),
          select: false
        },
      
      ]
    };
  },
  computed: {
    sendColor() {
      let aColor = [0, 0, 0, 0, 0];
      let nColor = [0, 0, 0, 0, 0];
      let color = "";
      for (let i = 0; i < this.selectList.length; i++) {
        if (this.selectList[i].color.search("red") != -1) {
          aColor[0]++;
          nColor[0]++;
        }
        if (this.selectList[i].color.search("blue") != -1) {
          aColor[1]++;
          nColor[1]++;
        }
        if (this.selectList[i].color.search("purple") != -1) {
          aColor[2]++;
          nColor[2]++;
        }
        if (this.selectList[i].color.search("orange") != -1) {
          aColor[3]++;
          nColor[3]++;
        }
        if (this.selectList[i].color.search("green") != -1) {
          aColor[4]++;
          nColor[4]++;
        }
      }
      let maxValue = aColor.sort((a, b) => b - a)[0];
      for (let i = 0; i < nColor.length; i++) {
        if (nColor[i] == maxValue) {
          if (i == 0) {
            color = "red";
          } else if (i == 1) {
            color = "blue";
          } else if (i == 2) {
            color = "purple";
          } else if (i == 3) {
            color = "orange";
          } else {
            color = "green";
          }
          break;
        }
      }
      return color;
    }
  },
  methods: {
    routerChange() {
      localStorage.setItem("back", this.sendColor);
      window.location.href = "http://www.kalaplay.com.cn/result";
    },
    cardClick(index) {
      if (this.list[index].select == false) {
        this.selectList.push(this.list[index]);
        this.list[index].select = !this.list[index].select;
        this.count++;
      } else {
        this.count--;
        this.list[index].select = !this.list[index].select;
        for (let i = 0; i < this.selectList.length; i++) {
          if (this.selectList[i].id == this.list[index].id) {
            this.selectList.splice(i, 1);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.select {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("https://fengpu1351-1300303301.cos.ap-guangzhou.myqcloud.com/%E5%A5%87%E5%A6%99%E5%AD%A6%E7%90%B4%E8%AE%B0/select3.jpg");
  background-size: 100% 100%;
  z-index: -100;
}
.cards {
  width: 80%;
  margin-top: 35%;
  margin-left: auto;
  margin-right: auto;
  height: 57%;
  overflow-y: scroll;
  background-color: white;
}
.card {
  width: 100%;
  height: auto;
}

.title {
  font-weight: bold;
  font-size: 18px;
}
.info {
  font-size: 15px;
  letter-spacing: 2px;
}
.imgBlock {
  position: relative;
  width: 100%;
  height: 200px;
}
.showImg {
  width: 100%;
  height: 100%;
}
.cross {
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100px;
  height: 100px;
  left: 50%;
}
.count {
  position: absolute;
  font-weight: bold;
  font-size: 25px;
  color: rgb(170, 57, 58);
  bottom: 10.5%;
  left: 50%;
  transform: translateX(-50%);
}
.enter {
  width: 50%;
  height: 6%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0%;
}
</style>