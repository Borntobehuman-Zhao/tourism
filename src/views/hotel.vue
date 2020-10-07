<template>
  <div>
    <div class="head3">
      <table width="100%" align="center">
        <tr>
          <td><img src="../assets/resources/picture/logo.png"></td>
          <td><input type="text" placeholder="输入关键字搜索景区"/>
            <button>搜索</button>
          </td>
          <td>咨询热线：88888888</td>
          <td v-if="isLogin">
            <el-dropdown>
  <span class="el-dropdown-link">
   <img src="../assets/resources/picture/message.png"> 个人中心
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="login">登出</router-link>
                </el-dropdown-item>
                <el-dropdown-item divided>合作</el-dropdown-item>
                <el-dropdown-item disabled>协作伙伴</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </td>
          <td v-if="!isLogin">
            <router-link to="/login">
              <el-button type="success " round>登录</el-button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
    <div class="head2">
      <table width="100%" height="50px" align="center">
        <tr>
          <td align="center">
            <router-link to="/index">首页</router-link>
          </td>
          <td align="center">
            <router-link to="/attractions">景点推荐</router-link>
          </td>
          <td align="center">
            <router-link to="/hotel">酒店推荐</router-link>
          </td>
          <td align="center"><a href="#">旅游攻略</a></td>
        </tr>
      </table>
    </div>
    <div class="head10">
      <h2>香格里拉大酒店(西安钟楼东路店)</h2>
      <div class="head11">
        <table width="100%" align="center">
          <tr>
            <td>
              <img src="../assets/resources/picture/酒店照片/2.jpg" height="376" width="100%">
            </td>
            <td>
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/酒店内景/1.jpg" height="120px" width="220"></td>
                  <td><img src="../assets/resources/picture/酒店内景/2.jpg" height="120px" width="220"></td>
                </tr>
                <tr>
                  <td><img src="../assets/resources/picture/酒店内景/3.jpg" height="120px" width="220"></td>
                  <td><img src="../assets/resources/picture/酒店内景/4.jpg" height="120px" width="220"></td>
                </tr>
                <tr>
                  <td><img src="../assets/resources/picture/酒店内景/5.jpg" height="120px" width="220"></td>
                  <td><img src="../assets/resources/picture/酒店内景/6.jpg" height="120px" width="220"></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="box">
      <label for="from">从</label>
      <input type="text" name="from" class="from" id="from">
      <label for="to">到</label>
      <input type="text" name="to" class="to" id="to">
    </div>
    <div class="head12">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="房间预订" name="first">
          <table width="1000px" height="600px">

            <tr>
              <td>图1</td>
            <tr>
              <table width="1000px" height="200px">
                <tr>
                  <td>官网专项价</td>
                  <td>不含早</td>
                  <td>1/2</td>
                  <td>{{ price_big }}</td>
                  <td>
                    <button class="button-two" @click="order_big">立即预定</button>
                  </td>
                </tr>
                <tr>
                  <td>限时优惠价</td>
                  <td>含单早</td>
                  <td>1/2</td>
                  <td>{{ price_big * member1 }}</td>
                  <td>
                    <button class="button-two" @click="order_big">立即预定</button>
                  </td>
                </tr>
                <tr>
                  <td>会员价</td>
                  <td>含双早</td>
                  <td>1/2</td>
                  <td>{{ price_big * member2 }}</td>
                  <td>
                    <button class="button-two" @click="order_big">立即预定</button>
                  </td>
                </tr>
              </table>
            </tr>
            <table width="1000px" height="200px">
              <tr>
                <td>图2</td>
              </tr>
              <tr>
                <td>官网专项价</td>
                <td>不含早</td>
                <td>1/2</td>
                <td>{{ price_two }}</td>
                <td>
                  <button class="button-two" @click="order_two">立即预定</button>
                </td>
              </tr>
              <tr>
                <td>限时优惠价</td>
                <td>含单早</td>
                <td>1/2</td>
                <td>{{ price_two * member1 }}</td>
                <td>
                  <button class="button-two" @click="order_two">立即预定</button>
                </td>
              </tr>
              <tr>
                <td>会员价</td>
                <td>含双早</td>
                <td>1/2</td>
                <td>{{ price_two * member2 }}</td>
                <td>
                  <button class="button-two" @click="order_two">立即预定</button>
                </td>
              </tr>
            </table>
          </table>
        </el-tab-pane>
        <el-tab-pane label="酒店信息" name="second">
          <p><b>入住时间:</b>14:00后</p>
          <p><b>退房时间:</b>12:00前</p>
          <p><b>酒店介绍:</b></p>
          <P>香格里拉西安钟楼店地处科技园核心区域，南临火车站，北靠回民街，距地铁一号线高新园站
            B出口仅500米，交通十分便利；TCL 、创维 、 联想 、华为、中兴、腾讯、长城、科兴科学
            园、金融科技大厦、普联科技等知名大厦及企业近在咫尺（步行5分钟）；距离旅游景区“世界之
            窗”、“欢乐谷”、“锦绣中华”仅5分钟车程（坐地铁仅有两站）；距离万象天地只要步行5分钟，
            距离深圳湾口岸8分钟车程、距离深圳湾人才公园、后海总部基地仅8分钟车程、距离深圳湾公园
            （红树林海滨生态公园）仅6分钟车程；为市民和游客提供了集休闲娱乐、健身运动、观光旅游、
            体验自然等多功能活动的区域，是离深圳湾体育馆就近的一家优品。本酒店致力于打造商务休闲与
            旅游度假兼备的时尚精品酒店！
            <br/>
            酒店大堂设有书吧和水吧，如您坐在大堂配上一本好书，品上一杯花茶，再加上一首舒缓的音乐，给您
            旅途增加一份惊喜。
            <br/>
            酒店餐厅环境优雅、温馨舒适，提供营养健康、种类丰富的自助早餐，给您高品质的饮食体验，为您繁忙的旅途
            增添一份欢愉和安心。
            <br/>
            酒店增设会议室，为您提供视听设备和专业温馨的服务；自助洗衣房，洗衣烘干一气呵成，为您旅途减轻一点
            负担；健身房，将运动融入生活，让您尽情挥洒汗水，释放压力。
            <br/>
            7天优品Premium是铂涛集团旗下，聚焦商旅住宿需求的高品质酒店。它来源于当代年轻人在商旅出
            行中，对优质睡眠的渴求，旨在通过一个兼具品质感、体验感的酒店产品，为当代年轻人的商旅出行提供一处拥有越级体验的舒睡意境。
            <br/>
            提供免费停车场，优雅的住宿环境、良好的硬件设施，让您体验不一样的7天优品，这里是您来到科技
            园差旅的必选之地，我店全体员工期待您的光临！</P>
          <br/>
          we subway station store is located in the core area of science and technol
          ogy park. It is adjacent to Shennan Avenue in the south, Beihuan Avenue in
          the north, Keyuan Road in the west, and only 500m from exit b of gaoxinyuan
          station of Metro Line 1. The transportation is very convenient; TCL, Skyworth and
          Lenovo Huawei, ZTE, Tencent, great wall, Kexing Science Park, financial technology buil
          ding, Pulian technology and other famous buildings and enterprises are close
          (5 minutes' walk); it's only 5 minutes' drive from the tourist attractions "window of th
          e world", "Happy Valley" and "Splendid China" (only two stops by subway); it
          's only 5 minutes' walk from Vientiane world; it's 8 minutes' drive from She
          nzhen Bay Port It is only 8 minutes' drive from Shenzhen Bay talent Park, Houhai
          headquarters base, and 6 minutes' drive from Shenzhen Bay Park (mangrove seasho
          re Ecological Park). It provides a multi-functional activity area for citizens a
          nd tourists, including leisure and entertainment, fitness, sightseeing and tourism,
          and experiencing nature. It is the nearest excellent product from Shenzhen Bay gymnasi
          um. The hotel is committed to building a fashionable boutique hotel with both busine
          ss leisure and tourism holiday!
          There are book bar and water bar in the lobby of the hotel. If you sit
          in the lobby with a good book, taste a cup of flower tea, and add a soothing music, y
          ou will have a surprise on your journey.

          The restaurant environment is elegant, warm and comfortable, providing nutritious and healt
          hy breakfast buffet, providing you with a high-quality eating experience and adding happiness
          and peace to your busy journey.

          The hotel has set up a meeting room to provide you with audio-visual equipment and professional wa
          rm services; self-service laundry, laundry and drying in one go, to reduce the burden of your journey;
          the gym, to integrate sports into your life, let you enjoy your sweat and release the pressure.
          7-day premium is a high-quality hotel under the platinum group, focusing on business travel and accommoda
          tion needs. It comes from the desire for high-quality sleep of contemporary young people in business travel.
          It aims to provide a comfortable sleep mood with super level experience for the business travel of co
          ntemporary young people through a hotel product with a sense of quality and experience.
          Provide free parking, elegant accommodation environment, good hardware facilities, let you experience diffe
          rent 7-day superior product
          s, here is the first choice for you to travel to the science and Technology Park, all
          staff of our store are looking forward to your presence!
        </el-tab-pane>
        <el-tab-pane label="酒店政策" name="third">
          <h3>酒店政策</h3>
          <p><b>外宾:</b>可接待外宾</p>
          <p><b>儿童:</b>不接受18岁一下客人单独入住</p>
          <p><b>宠物:</b>不可携带宠物</p>
          <p><b>发票:</b>可开具增值税普通发票、增值税专用发票</p>
          <p>
            *境内人士：疫情反复区域（北京、吉林）来深人士须有健康绿码及7日内的核酸检测阴性证明。
            <br/>
            *境外人士：长居境内人士须持有健康绿码；从疫情复发区域来深人士须有健康绿码及7日内核酸检
            测阴性证明；境外来深人士须有健康绿码、解除医学隔离证明及7日内核酸检测阴性证明。
            <br/>
            *预订成功后可致电分店前台免费升级生日、情侣房保留。
            <br/>
            *所有入住客人均需携带并出示有效证件进行入住登记（不接受18周岁以下客人在无监护人陪同的情况下入住），
            来访客人也需证件登记，非外籍人士护照不作为有效证件，不可办理入住。
            <br/>
            *上午8:00后有房即可办理入住；
            <br/>
            *分店入住禁止携带宠物:狗、猫等。。。。。。

            <br/>
            *People within the territory of China: people coming to Shenzhen from the epidemic
            area (Beijing, Jilin) must have a healthy green code and a negative nucleic acid test
            certificate within 7 days.
            *Overseas people: those living in China for a long time must have a healthy green code,
            those coming from the epidemic recurrence area must have a healthy green code and a negat
            ive nucleic acid test certificate within 7 days, those living in China must have a heal
            thy green code, a medical isolation release certificate and a negative nucleic acid test
            certificate within 7 days.
            * After successful booking, we can call the front desk of the branch store to upgrade the
            birthdays and keep the couple's rooms free of charge.
            * All visitors are required to bring and produce valid certificates for check-in registration
            (no visitors under 18 years of age are allowed to check in without guardians). Visitors are also
            required to register their certificates. Passports of non-foreigners are not valid certificates
            and can not be checked in.
            * After 8:00 a.m., you can check in if you have a room.
            * No pets: dogs, cats, etc.
          </p>
        </el-tab-pane>
        <el-tab-pane label="酒店服务" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {isLogin} from "../vuex/getters";

export default {
  data() {
    return {
      price_big: 1,
      status: 1,
      price_two: 1,
      admin: (this.$route.params.loginSuccess !== undefined),
      activeName: 'first',
      hostelId: 1,
      roomId_big: 1,
      roomId_two: 1,
      member1: 0.9,
      member2: 0.8
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    order_big(type) {
      if (this.$store.getters.isLogin) {
        console.log("预定了大床房")
        this.$axios({
          method: 'post',
          url: 'api/setStatus',
          data: {
            roomId: this.roomId_big,
            hostelId: this.hostelId,
            status: this.status,
            administrator: sessionStorage.getItem("userName")
          }
        }).then(res => {
          if (res.data.code === 200) {
            alert("恭喜你，预订成功啦")
            console.log(res.data);
          }
        }).catch(error => console.log(error, "error"))
      } else {
        alert("请先登录");
      }
    },
    order_two() {
      if (this.$store.getters.isLogin) {
        console.log("预定了双人床")
        this.$axios({
          method: 'post',
          url: 'api/setStatus',
          data: {
            roomId: this.roomId_two,
            hostelId: this.hostelId,
            status: this.status,
            administrator: sessionStorage.getItem("userName")
          }
        }).then(res => {
          if (res.data.code === 200) {
            alert("恭喜你，预订成功啦")
            console.log(res.data);
          }
        }).catch(error => console.log(error, "error"))
      } else {
        alert("请先登录");
      }
    }
  },
  computed: {
    isLogin() {
      if (sessionStorage.getItem("userName") !== "null") {
        console.log("未设置")
        this.$store.commit("userStatus", sessionStorage.getItem("userName"));
      } else {
        console.log("设置为空")
        this.$store.commit("userStatus", null);
      }
      return this.$store.getters.isLogin;
    },
  },
  created() {
    this.$axios({
      method: 'post',
      url: 'api/findDefault',
      data: {
        hostelId: this.hostelId,
        type: 'big'
      },
    }).then(res => {
      this.price_big = res.data.data.price;
      this.roomId_big = res.data.data.roomId;
    }).catch(error => console.log(error, "error"))
    this.$axios({
      method: 'post',
      url: 'api/findDefault',
      data: {
        hostelId: this.hostelId,
        type: 'two'
      },
    }).then(res => {
      this.price_two = res.data.data.price;
      this.roomId_two = res.data.data.roomId;
    }).catch(error => console.log(error, "error"))
  },
};
</script>

<style scoped>
@import "../assets/resources/css/attractions.css";
</style>
