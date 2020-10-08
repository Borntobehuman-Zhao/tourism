<template>
  <div>
    <div class="head">
      <img src="../assets/resources/picture/personal.png" height="650pxS">
      <div class="head1">
        <el-divider content-position="left">
          <p>个人中心：</p>
        </el-divider>
      </div>
      <div class="head2">
        <table width="90%" height="500px">
          <tr>
            <td width="30%" align="center">用户名：
            </td>
            <td width="70%" align="left">{{data.name}}
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">账号：
            </td>
            <td width="70%" align="left">asflasf92323jlk{{data.id}}
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">电话:
            </td>
            <td width="70%" align="left">{{data.phone}}
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">身份证号码:
            </td>
            <td width="70%" align="left" v-if="data.idNumber === null">尚未设置
            </td>
            <td width="70%" align="left" v-if="data.idNumber !== null">{{data.idNumber}}
            </td>
          </tr>
          <el-divider></el-divider>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "personal",
      admin: sessionStorage.getItem("userName"),
      data : '',
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
    }).catch(error => console.log(error, "error"))
  }
}
</script>

<style scoped>
@import "../assets/resources/css/personal.css";
</style>
