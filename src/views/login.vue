<template>
  <div class="cotn_principal">
    <div class="cont_centrar">
      <div class="cont_login">
        <div class="cont_info_log_sign_up">
          <div class="col_md_login">
            <div class="cont_ba_opcitiy">
              <h2>登录</h2>
              <p>已有账号请直接登录</p>
              <button class="btn_login" @click="cambiar_login()">登录</button>
            </div>
          </div>
          <div class="col_md_sign_up">
            <div class="cont_ba_opcitiy">
              <h2>注册</h2>
              <p>首次来访请先注册</p>
              <button class="btn_sign_up" @click="cambiar_sign_up()">注册</button>
            </div>
          </div>
        </div>
        <div class="cont_forms">
          <div class="cont_img_back_"><img src="po.jpg" alt=""/></div>
          <div class="cont_form_login"><a href="#" @click="ocultar_login_sign_up()"><i
            class="material-icons">&#xE5C4;</i></a>
            <h2>登录</h2>
            <input type="text" placeholder="手机号" v-model="phone"/>
            <input type="password" placeholder="密码" v-model="password"/>
            <form action="#">
              <input type="text" id="validCode"/>
              <input type="text" placeholder="点击获取验证码" @click="createCode()" readonly="readonly" id="checkCode"
                     class="unchanged" style="width: 80px;cursor:pointer"/><br/>
            </form>
            <button class="btn_login" @click="login()">登录</button>
          </div>
          <div class="cont_form_sign_up"><a href="#" @click="ocultar_login_sign_up()"><i
            class="material-icons">&#xE5C4;</i></a>
            <h2>注册</h2>
            <input type="text" placeholder="姓名" v-model="username"/>
            <input type="text" placeholder="电话" v-model="phone"/>
            <input type="password" placeholder="密码" v-model="password"/> <br>
            <p> 性别:
              <template>
                <el-radio v-model="radio" label="0">男</el-radio>
                <el-radio v-model="radio" label="1">女</el-radio>
              </template>
            </p>
            <button class="btn_sign_up" @click="register()">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
var code;
$(document).ready(function () {
  $(".J_download").bind("click", function () {
    $(".J_before").hide(40);
    $(".J_after").show(200);
    createCode();
  });
  $(".btn-no").bind("click", function () {
    $(".J_after").hide(40);
    $(".J_before").show(200);
  });
})
import cookie from 'js-cookie'

export default {
  data() {
    return {
      radio: '0',
      username: '11',
      password: '',
      phone: ''
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$store.dispatch("setUser", null);
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    createCode() {
      code = "";
      var codeLength = 4;//验证码的长度
      var checkCode = document.getElementById("checkCode");
      var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//所有候选组成验证码的字符，当然也可以用中文的
      for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36);
        code += selectChar[charIndex];
      }
      if (checkCode) {
        checkCode.className = "code";
        checkCode.value = code;
        checkCode.blur();
      }
    },
    showCheck(a) {/* 显示验证码图片 */
      alert("qi")
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, 1000, 1000);
      ctx.font = "80px Arial";
      ctx.fillText(a, 0, 100);
    },
    validate() {

    },
    cambiar_sign_up(at) {
      document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
      document.querySelector('.cont_form_sign_up').style.display = "block";
      document.querySelector('.cont_form_login').style.opacity = "0";
      setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.opacity = "1";
      }, 100);

      setTimeout(function () {
        document.querySelector('.cont_form_login').style.display = "none";
      }, 400);
    },
    register() {
      this.$axios({
        method: "post",
        url: "api/registry",
        data: {
          sex: this.radio,
          name: this.username,
          phone: this.phone,
          password: this.password,
        }
      })
        .then(response => {
          console.log('registry', response.data)
          alert(response.data.message);
        })
        .catch(error =>
          console.log(error, "error"))
    },
    ocultar_login_sign_up() {
      document.querySelector('.cont_forms').className = "cont_forms";
      document.querySelector('.cont_form_sign_up').style.opacity = "0";
      document.querySelector('.cont_form_login').style.opacity = "0";
      setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
      }, 500);
    },
    login() {
      var inputCode = document.getElementById("validCode").value;
      if (inputCode.length <= 0) {
        alert("请输入验证码！");
      } else if (inputCode.toUpperCase() != code) {
        alert("验证码输入错误！");
        createCode();//刷新验证码
      } else {
        this.$axios({
          method: "post",
          url: "api/login",
          data: {
            phone: this.phone,
            password: this.password,
          }
        })
          .then(response => {
            console.log('login', response.data)
            if (response.data.code === 200) {
              sessionStorage.setItem("userName", JSON.stringify(this.phone));
              console.log(sessionStorage.getItem("userName"));
              this.$router.push('index');
            } else {
              alert(response.data.message)
            }
          })
          .catch(error => console.log(error, "error"))
      }
    },
    cambiar_login() {
      document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
      document.querySelector('.cont_form_login').style.display = "block";
      document.querySelector('.cont_form_sign_up').style.opacity = "0";

      setTimeout(function () {
        document.querySelector('.cont_form_login').style.opacity = "1";
      }, 400);

      setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
      }, 200);
    }
  }
}
</script>
<style scoped>
@import "../assets/resources/css/style.css";
</style>
