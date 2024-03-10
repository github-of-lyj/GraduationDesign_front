<template>
  <div id="register">
    <div id="formData">
      <form @submit.prevent="demo">
        <div class="inputData">
          <label id="inputKey">邮箱</label>
          <input
            @blur="checkEmail"
            placeholder="请输入邮箱"
            v-model="userRegisterInfo.userAccount"
            class="inputStyle"
          />
          <p id="tipInfo" ref="userAccountInfo">
            请输入正确的邮箱
          </p>
        </div>
        <div class="inputData">
          <label id="inputKey">用户名</label>
          <input
            @blur="checkuserName"
            placeholder="请输入用户名"
            v-model="userRegisterInfo.userName"
            class="inputStyle"
          />
          <p id="tipInfo" ref="userNameInfo">
            用户名存在特殊符号或长度不在5-10位之间
          </p>
        </div>
        <div class="inputData">
          <label id="inputKey">密码</label>
          <input
            type="password"
            @blur="checkPassword"
            placeholder="请输入密码"
            v-model="userRegisterInfo.userPassword"
            class="inputStyle"
            autocomplete="off"
          />
          <p id="tipInfo" ref="userPasswordInfo">
            密码至少包含一个字母和一个数字，并且长度至少为8位
          </p>
        </div>
        <div class="inputData">
          <label id="inputKey">验证码</label>
          <input
            @blur="checkverifyCode"
            placeholder="请输入验证码"
            v-model="userRegisterInfo.verifyCode"
            class="inputStyle verifyCode"
          />
          <el-button plain id="verifyButton" @click="sendVerifyCode">发送验证码</el-button>
          <p id="tipInfo" ref="verifyCodeInfo">
            验证码应当是六位字母以及数字的组合
          </p>
        </div>
        <el-button round @click="sendRegisterRequest">注册</el-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from "pubsub-js"
export default {
  data() {
    return {
      userRegisterInfo: {
        userAccount: "",
        userName: "",
        userPassword: "",
        verifyCode: "",
      },
      userRegister:{
        accountErr: false,
        nameErr: false,
        passwordErr: false,
        verifyCodeErr: false
      },
    };
  },
  methods:{
    checkEmail(){
      var regular_userAccount = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      var flag = regular_userAccount.test(this.userRegisterInfo.userAccount)
      var userAccountInfo = this.$refs.userAccountInfo;
      if ((this.userRegisterInfo.userAccount == "") | flag) {
        userAccountInfo.style.display = "none";
        this.userRegister.accountErr = false
      } else {
        userAccountInfo.style.display = "inline-block"
        this.userRegister.accountErr = true
      }
    },
    checkuserName() {
      var regular_userName = /^[\u4e00-\u9fa5\w]{5,10}$/
      var flag = regular_userName.test(this.userRegisterInfo.userName)
      var userNameInfo = this.$refs.userNameInfo;
      if ((this.userRegisterInfo.userName == "") | flag) {
        userNameInfo.style.display = "none";
        this.userRegister.nameErr = false
      } else {
        userNameInfo.style.display = "inline-block"
        this.userRegister.nameErr = true
      }
    },
    checkPassword(){
      var regular_userPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      var flag = regular_userPassword.test(this.userRegisterInfo.userPassword)
      var userPasswordInfo = this.$refs.userPasswordInfo
      if ((this.userRegisterInfo.userPassword == "") | flag) {
        userPasswordInfo.style.display = "none"
        this.userRegister.passwordErr = false
      } else {
        userPasswordInfo.style.display = "inline-block"
        this.isErr = true
        this.userRegister.passwordErr = true
      }
    },
    checkverifyCode(){
      var regular_verifyCode = /^[A-Za-z0-9]{6}$/
      var flag = regular_verifyCode.test(this.userRegisterInfo.verifyCode)
      var verifyCodeInfo = this.$refs.verifyCodeInfo;
      if ((this.userRegisterInfo.verifyCode == "") | flag) {
        verifyCodeInfo.style.display = "none";
        this.userRegister.verifyCodeErr = false
      } else {
        verifyCodeInfo.style.display = "inline-block"
        this.isErr = true
        this.userRegister.verifyCodeErr = true
      }
    },
    sendVerifyCode(){
      axios.post("http://192.168.23.129/user/mail/sendCode",this.userRegisterInfo)
    },
    sendRegisterRequest(){
      for(var key in this.userRegisterInfo){
        if(this.userRegisterInfo[key] === ''){
          this.$message({
            message: "存在为空的栏目",
            type: "warning"
          })
          return 
        }
      }
      for(var index in this.userRegister){
        if(this.userRegister[index]){
          this.$message({
            message: "请按照相应规则填写",
            type: "warning"
          })
          return 
        }
      }
      axios.post("http://192.168.23.129/user/register",this.userRegisterInfo).then(
        (response) => {
          if(response.data.description){
            this.$message({
              message: response.data.description,
              type: "error"
            })
          }else{
            pubsub.publish('registerSuccess')
          }
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
};
</script>

<style scoped>
#guideLine {
  margin: 50px 0 22px 39px;
}

#formData {
  padding-top: 20px;
  padding-left: 39px;
}
#inputKey {
  display: block;
  float: left;
  font-size: 14px;
  color: #333;
  width: 50px;
  height: 40px;
  line-height: 40px;
  font-weight: 200;
  margin-right: 16px;
}
#tipInfo {
  display: none;
  color: red;
  font-size: 10px;
  margin: 0;
  margin-top: 5px;
}
.inputData {
  margin-top: 16px;
  margin-bottom: 30px;
}
.inputStyle {
  height: 12px;
  width: 250px;
  color: #000;
  padding: 11px 10px;
  max-height: 40px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
}
.verifyCode{
  width: 120px;
  margin-right: 12px;
}
#verifyButton{
  float: none;
  width: 120px;
}

.el-button {
  width: 342px;
  float: left;
}
</style>