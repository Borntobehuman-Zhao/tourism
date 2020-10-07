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
    <div class="head">
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
              <router-link to="/hotels">酒店推荐</router-link>
            </td>
            <td align="center"><a href="#">旅游攻略</a></td>
          </tr>
        </table>
      </div>
      <div class="block">
        <el-carousel trigger="click" height="570px" align="center">
          <el-carousel-item v-for="(item,index) in imageList" :key="index">
            <img v-bind:src="item.url" width="96%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="body">
      <table height="100px" width=100%>
        <tr heght="50px">
          <td align="left"><h2 style="color:#ff9933">热门景点</h2></td>
          <td align="right"><a href="attractions.vue">查看更多</a></td>
        </tr>
      </table>

    </div>
    <div class="body1">
      <table width="90%" height="300" align="center">
        <tr height="250px">
          <td width="30%" align="center"><a href="#"><img src="../assets/resources/picture/xian1.jpg"><br>西安</a>
          </td>
          <td width="30%" align="center"><a href="#"><img
            src="../assets/resources/picture/baoji1.jpg"><br>宝鸡</a></td>
          <td width="30%" align="center"><a href="#"><img src="../assets/resources/picture/ankang1.jpg"><br>安康</a>
          </td>
        </tr>
        <tr>
          <td width="30%" align="center"><a href="#"><img
            src="../assets/resources/picture/xianyang1.jpg"><br>咸阳</a></td>
          <td width="30%" align="center"><a href="#"><img src="../assets/resources/picture/yanna1.jpg"><br>延安</a>
          </td>
          <td width="30%" align="center"><a href="#"><img
            src="../assets/resources/picture/hanzhong1.jpg"><br>汉中</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: (this.$route.params.loginSuccess !== undefined),
      imageList: [
        {
          url: require("../assets/resources/picture/lunbo1.jpg")
        },
        {
          url: require("../assets/resources/picture/lunbo2.jpg")
        },
        {
          url: require('../assets/resources/picture/lunbo3.jpg')
        },
        {
          url: require('../assets/resources/picture/lunbo4.jpg')
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
    },
  }
}
</script>

<style scoped>

@import "../assets/resources/css/index_css.css";
</style>
