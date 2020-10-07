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
          <td v-if="admin">个人中心：<img src="../assets/resources/picture/message.png"></td>
          <td v-if="!admin">
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
            <td align="center"><a href="../views/index.vue">首页</a></td>
            <td align="center">
              <router-link to="/attractions">景点推荐
              </router-link></td>
            <td align="center">
              <router-link to="/hotels">酒店推荐
              </router-link></td>
            <td align="center"><a href="#">旅游攻略</a></td>
          </tr>
        </table>
      </div>
      <div class="picture">
        <div class="block">
          <el-carousel trigger="click" height="650px" align="left">
            <el-carousel-item v-for="item in imageList" :key="item">
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
          <el-tab-pane label="华清池" name="first">
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/华清池/华清池1.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池2.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池5.jpg" height="100px" width="150px"/></td>
                </tr>
              </table>
            </div>
            <div class="enlarge">
              <table>
                <tr>
                  <td><img src="../assets/resources/picture/华清池/华清池4.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池3.jpg" height="100px" width="150px"/></td>
                  <td><img src="../assets/resources/picture/华清池/华清池6.jpg" height="100px" width="150px"/></td>
                </tr>
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：唐华清宫</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地理位置：陕西省西安市临潼区</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：华清池、骊山宫、骊宫、绣岭宫</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：120元/人</td>
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
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：太白山</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地域范围：陕西太白、眉县、周至三县</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：太乙山</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：220元/人</td>
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
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：黄帝陵</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地理位置：陕西省延安市黄陵县桥山镇</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：桥陵</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：75元/人</td>
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
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：秦始皇兵马俑</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地理位置：陕西省西安市临潼区</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：兵马俑，秦兵马俑，秦俑</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：120元/人</td>
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
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：马嵬驿</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地理位置：陕西省咸阳市兴平市西</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：马嵬坡</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：120元/人</td>
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
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：华阳古镇</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地理位置：陕西省汉中市华阳镇</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：无</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：免费</td>
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
                <div class="font">
                  <el-divider content-position="left"><h2>基本信息</h2></el-divider>
                  <table  width="100%" height="300px" class="font3">
                    <tr>
                      <td>中文名：宝塔山</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>地理位置：延安城东地</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>别名：嘉岭山</td>
                    </tr>
                    <el-divider></el-divider>
                    <tr>
                      <td>门票：65元/人</td>
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
    }
  }
}
</script>

<style scoped>
@import "../assets/resources/css/attractions.css";
</style>
