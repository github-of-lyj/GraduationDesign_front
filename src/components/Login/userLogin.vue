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
import pubsub from "pubsub-js"
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

  },
  mounted(){
    pubsub.subscribe("registerSuccess",()=>{
      this.isLogin = !this.isLogin
    })
  },
  beforeDestroy(){
    pubsub.unsubscribe("registerSuccess")
  }
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