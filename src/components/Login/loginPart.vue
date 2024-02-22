<template>
  <div id="login">
    <div id="formData">
      <form @submit.prevent="demo">
        <div class="inputData">
          <label id="inputKey">用户名</label>
          <input
            @blur="checkuserName"
            placeholder="请输入用户名"
            v-model="userLoginInfo.userName"
            class="inputStyle"
          />
          <p id="tipInfo" ref="userNameInfo">
            用户名存在特殊符号或长度不在5-10位之间
          </p>
        </div>
        <div class="inputData">
          <label id="inputKey">密码</label>
          <input
            @blur="checkPassword"
            type="password"
            placeholder="请输入密码"
            v-model="userLoginInfo.userPassword"
            class="inputStyle"
            autocomplete="off"
          />
          <p id="tipInfo" ref="userPasswordInfo">
            密码至少包含一个字母和一个数字，并且长度至少为8位
          </p>
        </div>
        <el-button round @click="sendLoginRequest">登录</el-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      userLoginInfo: {
        userName: "",
        userPassword: "",
      },
      userLogin: {
        nameErr: false,
        passwordErr: false
      },
    };
  },
  methods: {
    checkuserName() {
      var regular_userName = /^[\u4e00-\u9fa5\w]{5,10}$/
      var flag = regular_userName.test(this.userLoginInfo.userName)
      var userNameInfo = this.$refs.userNameInfo;
      if ((this.userLoginInfo.userName == "") | flag) {
        userNameInfo.style.display = "none";
        this.userLogin.nameErr = false
      } else {
        userNameInfo.style.display = "inline-block"
        this.userLogin.nameErr = true
      }
    },
    checkPassword(){
      var regular_userPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      var flag = regular_userPassword.test(this.userLoginInfo.userPassword)
      var userPasswordInfo = this.$refs.userPasswordInfo
      if ((this.userLoginInfo.userPassword == "") | flag) {
        userPasswordInfo.style.display = "none"
        this.userLogin.passwordErr = false
      } else {
        userPasswordInfo.style.display = "inline-block"
        this.userLogin.passwordErr = true
      }
    },
    sendLoginRequest(){
      for(var key in this.userLoginInfo){
        if(this.userLoginInfo[key] === ''){
          this.$message({
            message: "存在为空的栏目",
            type: "warning"
          })
          return 
        }
      }
      for(var index in this.userLogin){
        if(this.userLogin[index]){
          this.$message({
            message: "请按照相应规则填写",
            type: "warning"
          })
          return 
        }
      }
      axios.post('http://localhost:8080/user/login',this.userLoginInfo).then(
        (response) => {
          if(response.data.description){
            this.$message({
              message: response.data.description,
              type: 'error'
            })
          }else{
            console.log(response.data.data)
            pubsub.publish('userData',response.data.data)
            this.$router.push({
              name: 'Index'
            })
          }
        },
        (err) => {
          console.log(err)
        }
      )
    }
  },
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
.el-button {
  width: 342px;
  float: left;
}
</style>