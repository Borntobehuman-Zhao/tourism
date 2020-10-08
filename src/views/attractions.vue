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
    <div class="head">
      <div class="picture">
        <div class="block">
          <el-carousel trigger="click" height="650px" align="left">
            <el-carousel-item v-for="(item,index1) in imageList" :key="index1">
              <img v-bind:src="item.url" width="100%" height="600px">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="font1">
        <h1 align="center">陕西</h1>
        <p>&nbsp;</p>
        <p> &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;陕西，简称“陕”或“秦”，中华人民共和国省级行政区，省会西安，位于中国
          内陆腹地，黄河中游，东邻山西、河南，西连宁夏、甘肃，南抵四川、重庆、湖北，北接内蒙
          古，介于东经105°29′—111°15′，北纬31°42′—39°35′之间，总面积20.56万平方千米。</p>
        <p> &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;陕西省地势呈南北高、中间低，由高原、山地、平原和盆地等多种地貌构
          成，其中黄土高原占全省土地面积的40%，地跨 黄河、长江两大水系，横跨三个气候带，陕北北部长城
          沿线属中温带季风气候，关中及陕北大部属 暖温带季风气候，陕南属北亚热带季风气候。</p>
        <p> &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;陕西是中华民族及华夏文化的重要发祥地之一，有西周、秦、汉、唐等14个政权在陕西建都。</p>
        <p> &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;所以陕西具有很多名胜古迹，如秦兵马俑，唐华清宫，皇帝陵，太白山等著名景点。如果你想看山川蔓延万里
          雄伟，想看古人创造的伟大奇迹，那么陕西绝对是非常合适的一个地方。</p>
      </div>
    </div>
    <div class="head6">
      <table height="100px" width=98% align="center">
        <tr heght="50px">
          <td align="left"><h2 style="color:#ff9933">热门景点</h2></td>
          <td align="right"><a href="jingdian.html">查看更多</a></td>
        </tr>
      </table>
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(test,index2) in attractionList" :key="index2" :label="test.name" :name="test.name">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img :src="test.url+'1.jpg'" height="100px" width="150px"/></td>
                  <td><img :src="test.url+'2.jpg'" height="100px" width="150px"/></td>
                  <td><img :src="test.url+'3.jpg'" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img :src="test.url+'4.jpg'" height="100px" width="150px"/></td>
                  <td><img :src="test.url+'5.jpg'" height="100px" width="150px"/></td>
                  <td><img :src="test.url+'6.jpg'" height="100px" width="150px"/></td>
                </tr>
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：{{test.name}}</td>
                    </tr>
                    <tr>
                      <td>地理位置：{{test.address}}</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：{{test.price}}/人</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <router-link to="/hotels">酒店预订
                      </router-link>
                    </tr>
                  </table>
                </div>
              </table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
      <div class="head888">
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
import $ from 'jquery';

export default {
  data() {
    return {
      activeName: 'second',
      admin: sessionStorage.getItem("loginSuccess"),
      attractionList : '',
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
    }
  },
  created() {
    this.$axios({
      method:'get',
      url: 'api/findAllAttraction',
    }).then(res =>{
      this.attractionList = res.data.data;
      console.log(this.attractionList);
    }).catch(error =>console.log(error,"error"));
  }
}
</script>

<style scoped>
@import "../assets/resources/css/attractions.css";
</style>
