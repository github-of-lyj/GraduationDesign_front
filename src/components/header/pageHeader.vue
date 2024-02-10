<template>
  <div id="pageHeader">
    <div style="display: flex">
      <div id="logoAndtitle">
        <img id="logo" src="../../assets/logo.jpg" />
        <span id="websiteTitle">研墨</span>
      </div>
      <el-menu class="el-menu-demo" :router="true" :default-active="curPath">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/message">资讯</el-menu-item>
        <el-menu-item index="/forum/index">论坛</el-menu-item>
        <el-menu-item index="/information">资料</el-menu-item>
      </el-menu>
    </div>
    <div id="user">
      <div id="sign" v-if="!isLogin">
        <el-dropdown @command="login">
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="Login">登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-if="isLogin">
        <el-dropdown @command="userBehavior" placement="bottom-start">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <h4 id="userName">{{ userData.userName }}</h4>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="Login">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
import axios from "axios";
export default {
  data() {
    return {
      curPath: this.$route.path,
      userData: {},
      isLogin: false,
    };
  },
  watch: {
    "$route.path": {
      handler() {
        var pos = this.$route.path.slice(1).indexOf("/") + 1;
        var str = this.$route.path.slice(0, pos);
        if (str === "/forum" || str === "/information")
          this.curPath = str + "/index";
        else {
          if (str != "") this.curPath = str;
          else this.curPath = this.$route.path;
        }
        //路径变化后查看当前用户的登录状态
        console.log("路径变化了");
        var userData = JSON.parse(localStorage.getItem("user"));
        if (userData != null) {
          axios.post("http://localhost:8080/user/checkLogin", userData).then(
            (response) => {
              //说明此时发生了错误，用户登录已过期或用户异地登录
              if (response.data.description) {
                //提示相应的信息并移除当前会话下的本地存储
                this.$message({
                  message: response.data.description,
                  type: "warning",
                });
                localStorage.removeItem("user");
                this.isLogin = false;
                this.userData = {};
                //无论该用户进行了什么操作，都默认回到首页，
                this.$router.push('/')
              } else {
                this.isLogin = true;
                this.userData = userData;
              }
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
    },
  },
  methods: {
    login(pos) {
      this.$router.push({
        name: pos,
      });
    },
    userBehavior(behavior) {
      if (behavior === "logout") {
        axios.post("http://localhost:8080/user/logout", this.userData).then(
          () => {
            if (localStorage.getItem("user") != null)
              localStorage.removeItem("user");
            this.isLogin = false;
            this.userData = {};
            this.$message({
              message: "退出登录成功",
              type: "success",
            });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
  },
  mounted() {
    pubsub.subscribe("userData", (msgName, userData) => {
      this.userData = userData;
      this.isLogin = true;
      localStorage.setItem("user", JSON.stringify(userData));
    });

    //组件重新渲染时查看当前用户的登录状态
    console.log("组件重新渲染了");
    var userData = JSON.parse(localStorage.getItem("user"));
    if (userData != null) {
      axios.post("http://localhost:8080/user/checkLogin", userData).then(
        (response) => {
          if (response.data.description) {
            this.$message({
              message: response.data.description,
              type: "warning",
            });
            localStorage.removeItem("user");
            this.isLogin = false;
            this.userData = {};
            //无论该用户进行了什么操作，都默认回到首页，
            this.$router.push('/')
          } else {
            this.isLogin = true;
            this.userData = userData;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  },
};
</script>

<style scoped>
#pageHeader {
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid black;
  border-radius: 10px;
}
#logoAndtitle {
  display: flex;
  align-items: center;
}
#logo {
  height: 60px;
  margin-left: 10px;
}
#websiteTitle {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  width: 20px;
}
#user {
  display: flex;
  align-items: center;
}

#userName {
  margin-left: 10px;
  margin-right: 10px;
}
#sign {
  margin-right: 50px;
}

.el-menu {
  height: 80px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  border-right: 0;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: 2px solid #409eff;
  border-radius: 10px;
}
.el-menu-item {
  display: flex;
  justify-content: center;
  width: 100px;
  font-size: 20px;
}
.el-dropdown {
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: black;
}
.el-icon-user {
  font-size: 20px;
}
.el-icon-arrow-down {
  font-size: 15px;
}
</style>