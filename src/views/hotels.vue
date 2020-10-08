<template>
  <div>
    <div class="all">
    <div class="head3">
      <table width="100%" align="center">
        <tr>
          <td width="20%" align="center"><img src="../assets/resources/picture/logo.jpg" width="130px" height="60px"></td>
          <td><input type="text" placeholder="输入关键字搜索景区"/>
            <button>搜索</button>
          </td>
          <td align="center">
            <router-link to="/index">首页</router-link>
          </td>
          <td align="center">
            <router-link to="/attractions">景点推荐</router-link>
          </td>
          <td align="center">
            <router-link to="/hotels">酒店推荐</router-link>
          </td>
          <td align="center"><a href="#">旅游攻略</a></td>
          <td>咨询热线：88888888</td>
          <td v-if="isLogin" width="10%" align="center">
            <el-dropdown>
  <span class="el-dropdown-link">
   <img src="../assets/resources/picture/message.png"/>个人中心
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
    <div class="picture1">
      <div class="block">
        <el-carousel trigger="click" height="570px" align="center">
          <el-carousel-item v-for="item in imageList" :key="item">
            <img v-bind:src="item.url" width="100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="head6">
      <table width="98%" align="center">
        <tr>
          <td align="center">
            <img src="../assets/resources/picture/酒店照片/1.jpg" height="260px" width="80%"><br/>
            <p>豪生大酒店</p><br/>
            <router-link to="/hotel">预订/查看详情
            </router-link>
            >
          </td>
          <td align="center">
            <img src="../assets/resources/picture/酒店照片/2.jpg" height="260px" width="80%"><br/>
            <p>君悦酒店</p><br/>
            <router-link to="/hotel">预订/查看详情
            </router-link>
          </td>
        </tr>
        <tr>
          <td align="center">
            <img src="../assets/resources/picture/酒店照片/3.jpg" height="260px" width="80%"><br/>
            <p>瑞吉酒店</p><br/>
            <router-link to="/hotel">预订/查看详情
            </router-link>
          </td>
          <td align="center">
            <img src="../assets/resources/picture/酒店照片/4.jpg" height="260px" width="80%"><br/>
            <p>7天酒店</p><br/>
            <router-link to="/hotel">预订/查看详情
            </router-link>
          </td>
        </tr>
      </table>
    </div>
    <div class="head8">
      <table width="90%" align="center" height="200px">
        <tr>
          <td width="30%" align="center">
            <img src="../assets/resources/picture/logo.jpg" align="center" height="40" width="90">
            <h3>风尚三秦</h3>
            <p>查看所有免费预订电话</p>
            <p> 区域销售办事处 | 公司联系方式</p>
          </td>
          <td width="30%" align="center">
            <p>关注我们</p>
            <img src="../assets/resources/picture/微博.png" align="center" height="30" width="30">
            <img src="../assets/resources/picture/微信.png" align="center" height="30" width="30">
            <img src="../assets/resources/picture/qq.png" align="center" height="30" width="30">
          </td>
          <td width="30%" align="center">
            <table cellspacing="10">
              <tr>
                <td><a href="//www.baidu.com">联系我们</a></td>
                <td><a href="//www.baidu.com">公司介绍</a></td>
              </tr>
              <tr>
                <td><a href="//www.baidu.com">媒体中心</a></td>
                <td><a href="//www.baidu.com">投资讯息</a></td>
              </tr>
              <tr>
                <td><a href="//www.baidu.com">招贤纳士</a></td>
                <td><a href="//www.baidu.com">企业责任</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      admin: sessionStorage.getItem("loginSuccess"),
      imageList: [
        {
          url: require("../assets/resources/picture/酒店照片/14.jpg")
        },
        {
          url: require("../assets/resources/picture/酒店照片/8.jpg")
        },
        {
          url: require('../assets/resources/picture/酒店照片/7.jpg')
        },
        {
          url: require('../assets/resources/picture/酒店照片/15.jpg')
        }
      ]
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
    }
  },
  methods: {
    register() {
      this.$router.push('/register')
    },
    login() {
      this.$router.push('/login')
    }
  },
  beforeRouteEnter(to, from, next) {
    // 添加背景色
    document.querySelector('body').setAttribute('style', 'background-color:#08092d')
    next()
  },
}
</script>

<style scoped>
@import "../assets/resources/css/attractions.css";

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
