<template>
  <div id="userLogin">
    <div class="mod-reg mod-new-reg-content">
      <div id="login" v-if="isLogin">
        <div class="new-reg-guide-login">
          <h3>欢迎登录</h3>
          <p>
            没有帐号？
            <span @click="isLogin = !isLogin">注册</span>
          </p>
        </div>
        <div class="reg-content tang-pass-reg" id="reg_content">
          <form id="pass-form">
            <p class="pass-form-item pass-form-item-userName">
              <label class="pass-label pass-label-userName"> 用户名</label>
              <input
                class="pass-text-input"
                id="pass-text-input-userName"
                placeholder="请输入用户名或电子邮箱"
              />
              <span class="error" id="userName-error" style="display: none"
                >必须以字母开头只能包括字母,下划线,数字长度必须在6到10之间</span
              >
            </p>
            <p class="pass-form-item pass-form-item-userName">
              <label class="pass-label pass-label-userName"> 密码</label>
              <input
                class="pass-text-input"
                id="pass-text-input-userName"
                placeholder="请输入密码"
              />
              <span class="error" id="password-error" style="display: none"
                >必须以字母开头只能包括字母,下划线,数字长度必须在6到10之间</span
              >
            </p>
            <p
              class="pass-form-item pass-form-item-submit pass-form-item-submit-v5"
            >
              <input
                class="pass-button pass-button-submit"
                type="submit"
                value="登录"
              />
            </p>
          </form>
        </div>
      </div>
      <div id="register" v-if="!isLogin">
        <div class="new-reg-guide-login">
          <h3>欢迎注册</h3>
          <p>
            已有帐号？
            <span @click="isLogin = !isLogin">登录</span>
          </p>
        </div>
        <div class="reg-content tang-pass-reg" id="reg_content">
          <form id="pass-form">
            <p class="pass-form-item pass-form-item-Mail">
              <label class="pass-label pass-label-Mail">邮箱</label>
              <input
                @blur="checkMail"
                class="pass-text-input"
                id="pass-text-input-Mail"
                placeholder="请输入邮箱"
              />
              <span class="error" id="Mail-error" style="display: none"
                >电子邮箱格式不正确</span
              >
            </p>
            <p class="pass-form-item pass-form-item-userName">
              <label class="pass-label pass-label-userName"> 用户名</label>
              <input
                @blur="checkuserName"
                class="pass-text-input"
                id="pass-text-input-userName"
                placeholder="请设置用户名"
              />
              <span class="error" id="userName-error" style="display: none"
                >以字母开头,只能包括字母,下划线,数字,长度在6到10位之间</span
              >
            </p>
            <p class="pass-form-item pass-form-item-userName">
              <label class="pass-label pass-label-userName"> 密码</label>
              <input
                @blur="checkuserName"
                class="pass-text-input"
                id="pass-text-input-userName"
                placeholder="请设置密码"
              />
              <span class="error" id="password-error" style="display: none"
                >以字母开头,只能包括字母,下划线,数字,长度在6到10位之间</span
              >
            </p>
            <p class="pass-form-item pass-form-item-verifyCode">
              <label class="pass-label pass-label-verifyCode">验证码</label>
              <input
                @blur="checkverifyCode"
                class="pass-text-input pass-text-input-verifyCode"
                id="verifyCode"
                placeholder="请输入验证码"
              />
              <input
                class="pass-button pass-button-verifyCodeSend"
                id=""
                type="button"
                value="获取验证码"
              />
              <span
                class="error"
                id="verifyCodeSend-error"
                style="display: none"
                >必须是数字,并且是4位数字</span
              >
            </p>
            <p
              class="pass-form-item pass-form-item-submit pass-form-item-submit-v5"
            >
              <input
                class="pass-button pass-button-submit"
                type="submit"
                value="注册"
              />
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    checkMail() {
      var Mail = document.getElementById("pass-text-input-Mail").value;
      var reg_Mail = /^[\w]+@[\w\\.-]+\.[a-zA-Z]{2,}$/;
      var flag = reg_Mail.test(Mail);
      var s_Mail = document.getElementById("Mail-error");
      if ((Mail == "") | flag) {
        s_Mail.style.display = "none";
      } else {
        s_Mail.style.display = "inline";
      }
    },
    checkuserName() {
      var userName = document.getElementById("pass-text-input-userName").value;
      var reg_userName = /^[a-zA-Z][\w]{5,9}$/;
      var flag = reg_userName.test(userName);
      var s_userName = document.getElementById("userName-error");
      if ((userName == "") | flag) {
        s_userName.style.display = "none";
      } else {
        s_userName.style.display = "inline";
      }
    },
    checkverifyCode() {
      var verifyCode = document.getElementById("verifyCode").value;
      var reg_verifyCode = /\d{4}/;
      var flag = reg_verifyCode.test(verifyCode);
      var s_verifyCode = document.getElementById("verifyCodeSend-error");
      if ((verifyCode == "") | flag) {
        s_verifyCode.style.display = "none";
      } else {
        s_verifyCode.style.display = "inline";
      }
    },
  },
};
</script>

<style>
#userLogin {
  background-image: url("../../assets/bj.png");
  background-size: 100% 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.mod-new-reg-content {
  margin: 100px;
  width: 500px;
  background: #fff;
  border: #000 1px dashed;
  border-radius: 12px;
  overflow: hidden;
}
.mod-new-reg-content .new-reg-guide-login h3 {
  font-size: 36px;
  color: #000;
  padding-bottom: 4px;
  margin: 0;
}
.new-reg-guide-login {
  margin: 50px 0 22px 39px;
}
.mod-new-reg-content .new-reg-guide-login p {
  font-size: 14px;
  color: #9b9b9b;
}
.mod-new-reg-content .new-reg-guide-login p span {
  color: #2e58ff;
  cursor: pointer;
}
.tang-pass-reg {
  padding-top: 48px;
  padding-bottom: 48px;
  position: relative;
  overflow: hidden;
}
.pass-form-item {
  margin-bottom: 40px;
  position: relative;
  clear: both;
  zoom: 1;
}
.tang-pass-reg .pass-label {
  display: block;
  float: left;
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  text-align: right;
  width: 82px;
  height: 40px;
  line-height: 40px;
  margin-right: 15px;
  font-weight: 200;
}
.tang-pass-reg .pass-text-input {
  padding: 11px 10px;
  max-height: 40px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  width: 321px;
  color: #000;
}
.tang-pass-reg .pass-text-input-verifyCode {
  width: 184px;
  margin-right: 9px;
}
.tang-pass-reg input.pass-button-verifyCodeSend {
  width: 126px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #e0e0e0;
  font-size: 12px;
  color: #333;
  letter-spacing: 0;
  text-align: center;
  line-height: 24px;
  height: 40px;
  font-weight: 400;
  margin-right: 10px;
}

.tang-pass-reg .pass-form-item-submit.pass-form-item-submit-v5 {
  margin-bottom: 15px;
}
.tang-pass-reg .pass-form-item-submit {
  left: 41px;
}
.mod-reg .tang-pass-reg .pass-button-submit:hover {
  background: #bdcefc;
}
.mod-reg .tang-pass-reg .pass-button-submit {
  background: #bdcefc;
  border-radius: 25px;
  width: 399px;
  float: left;
}
.tang-pass-reg .pass-button {
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background-image: none;
  border-radius: 3px;
  border: 0;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -webkit-transition: 0.3s;
}
.error {
  font-size: 12px;
  color: #f55;
  background: 0 0;
  padding-left: 0;
  padding-top: 0;
  position: absolute;
  left: 97px;
  top: 43px;
}
</style>