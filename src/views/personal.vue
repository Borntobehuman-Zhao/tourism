<template>
  <div>
    <div class="head">
      <div class="head3">
        <table width="100%" align="center">
          <tr>
            <td width="20%" align="center"><img src="../assets/resources/picture/logo.jpg" width="130px" height="60px">
            </td>
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
                <el-dropdown-menu slot="dropdown" style="background-color: #757575">
                  <el-dropdown-item>
                    <router-link to="login">登出</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="personal">个人资料</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="look()">查询预订</el-dropdown-item>
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
        <table width="90%" height="600px">
          <tr>
            <td width="30%" align="center">用户名：
            </td>
            <td width="70%" align="left">{{ data.name }}
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">账号：
            </td>
            <td width="70%" align="left">asflasf92323jlk{{ data.id }}
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">电话:
            </td>
            <td width="70%" align="left">{{ data.phone }}
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">身份证号码:
            </td>
            <td width="70%" align="left" v-if="data.idNumber === null">尚未设置
            </td>
            <td width="70%" align="left" v-if="data.idNumber !== null">{{ data.idNumber }}
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
      customerId: '',
      name: "personal",
      admin: sessionStorage.getItem("userName"),
      data: '',
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
  created() {
    console.log(this.admin)
    this.$axios({
      method: 'post',
      url: 'api/findByPhone',
      data: {
        phone: this.admin
      }
    }).then(res => {
      this.data = res.data.data
      this.customerId = res.data.data.id
    }).catch(error => console.log(error, "error"))
  },
  beforeRouteEnter(to, from, next) {
    // 添加背景色
    document.querySelector('body').setAttribute('style', 'background-color:#08092d')
    next()
  },
  methods: {
    look() {
      this.$axios({
        method: 'post',
        url: 'api/findRecode',
        data: {
          customerId: this.customerId
        }
      }).then(res => {
        alert(JSON.stringify(res.data.data));
      }).catch(error => console.log(error, "error"))
    }
  }
}
</script>

<style scoped>
@import "../assets/resources/css/personal.css";
</style>
