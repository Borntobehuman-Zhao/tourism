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
              <router-link to="/hotel">酒店推荐</router-link>
            </td>
            <td align="center"><a href="#">旅游攻略</a></td>
          </tr>
        </table>
      </div>
      <div class="block">
        <el-carousel trigger="click" height="650px" align="center">
          <el-carousel-item v-for="(item,index) in imageList" :key="index">
            <img v-bind:src="item.url" width="96%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="head6">
      <table height="100px" width=100%>
        <tr heght="50px">
          <td align="left"><h2 style="color:#ff9933">热门景点</h2></td>
          <td align="right"><a href="jingdian.html">查看更多</a></td>
        </tr>
      </table>
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="华清池" name="first">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/华清池/华清池1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池3.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/华清池/华清池4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="太白山" name="second">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/太白山/太白山1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/太白山/太白山2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/太白山/太白山3.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/太白山/太白山4.png" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/太白山/太白山5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/太白山/太白山6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="黄帝陵" name="third">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/黄帝陵/黄帝陵1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/黄帝陵/黄帝陵2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/黄帝陵/黄帝陵3.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/黄帝陵/黄帝陵4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/黄帝陵/黄帝陵5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/黄帝陵/黄帝陵6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="秦始皇兵马俑" name="fourth">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/秦始皇兵马俑/兵马俑2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/秦始皇兵马俑/兵马俑3.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/秦始皇兵马俑/兵马俑1.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/秦始皇兵马俑/兵马俑4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/秦始皇兵马俑/兵马俑5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/秦始皇兵马俑/兵马俑6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="马嵬驿" name="fifth">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/马嵬驿/马嵬驿民俗文化体验园1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/马嵬驿/马嵬驿民族文化体验园2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/马嵬驿/马嵬驿民族文化体验园3.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/马嵬驿/马嵬驿民族文化体验园4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/马嵬驿/马嵬驿民族文化体验园5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/马嵬驿/马嵬驿民族文化体验园6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="华阳古镇" name="sixth">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/华阳古镇/华阳古镇1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华阳古镇/华阳古镇2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华阳古镇/华阳古镇3.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/华阳古镇/华阳古镇4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华阳古镇/华阳古镇5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华阳古镇/华阳古镇6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="宝塔山" name="seventh">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/宝塔山/宝塔山1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/宝塔山/宝塔山2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/宝塔山/宝塔山3.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/宝塔山/宝塔山4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/宝塔山/宝塔山5.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/宝塔山/宝塔山6.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      activeName: 'second',
      admin: sessionStorage.getItem("loginSuccess"),
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
  methods: {
    register() {
      this.$router.push('/register')
    },
    login() {
      this.$router.push('/login')
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  computed: {
    isLogin() {
      if (sessionStorage.getItem("userName") !== "null") {
        this.$store.commit("userStatus", sessionStorage.getItem("userName"));
      } else {
        this.$store.commit("userStatus", null);
      }
      return this.$store.getters.isLogin;
    },
  }
}
</script>

<style scoped>
@import "../assets/resources/css/attractions.css";
</style>
