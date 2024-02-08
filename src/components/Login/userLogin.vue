<template>
  <div id="userLogin">
    <div id="userWindow">
      <div id="guideLine" v-if="isLogin">
        <h3>欢迎登录</h3>
        <p>
          <span id="guideTipOne">没有帐号？</span>
          <span id="guideTipTwo" @click="isLogin = !isLogin">注册</span> 或
          <span id="guideTipTwo" @click="isLogin = !isLogin">通过邮箱登录</span>
        </p>
      </div>
      <div id="guideLine" v-if="!isLogin">
        <h3>欢迎注册</h3>
        <p>
          <span id="guideTipOne">已有帐号？</span>
          <span id="guideTipTwo" @click="isLogin = !isLogin">登录</span>
        </p>
      </div>
      <loginPart v-if="isLogin"></loginPart>
      <registerPart v-if="!isLogin"></registerPart>
    </div>
  </div>
</template>

<script>
import loginPart from "./loginPart";
import registerPart from "./registerPart";
export default {
  components: { loginPart, registerPart },
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

<style scoped>
#userLogin {
  background-size: 100% 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
#userWindow {
  width: 30%;
  background-color: #fdfdfd;
  border: 1px black dashed;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 20px;
}
#guideLine h3 {
  font-size: 36px;
}
#guideTipOne {
  font-size: 14px;
  color: #9b9b9b;
}
#guideTipTwo {
  color: #2e58ff;
  cursor: pointer;
}
#guideLine {
  margin: 50px 0 22px 39px;
}
#guideLine h3 {
  font-size: 36px;
}
#guideTipOne {
  font-size: 14px;
  color: #9b9b9b;
}
#guideTipTwo {
  color: #2e58ff;
  cursor: pointer;
}
</style>