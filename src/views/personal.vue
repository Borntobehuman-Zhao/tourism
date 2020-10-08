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
            <td width="70%" align="left">1
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">账号：
            </td>
            <td width="70%" align="left">2
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">电话:
            </td>
            <td width="70%" align="left">3
            </td>
          </tr>
          <el-divider></el-divider>
          <tr>
            <td width="30%" align="center">身份证号码:
            </td>
            <td width="70%" align="left">4
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
  name: "personal"
}
</script>

<style scoped>
@import "../assets/resources/css/personal.css";
</style>
