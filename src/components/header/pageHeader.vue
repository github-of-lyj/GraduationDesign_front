<template>
  <div id="pageHeader">
    <div id="logoAndtitle">
      <img id="logo" src="../../assets/logo.jpg" />
      <span id="websiteTitle">研墨</span>
    </div>
    <el-breadcrumb separator="">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>论坛</el-breadcrumb-item>
      <el-breadcrumb-item>资料</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="user">
      <div id="sign">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登录</el-dropdown-item>
            <el-dropdown-item>注册</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <h4 id="userName">userName</h4> -->
    </div>
  </div>
</template>
<script>
export default {
    name: "pageHeader",
    
};
</script>

<style scoped>
#pageHeader {
  height: 80px;
  display: flex;
  margin: 15px;
  border: 1px solid black;
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
#sign{
    margin-left: 70px;
}
.el-breadcrumb {
  width: 80%;
  height: 80px;
  margin-left: 40px;
  display: flex;
  align-items: center;
}
.el-breadcrumb__item {
  display: flex;
  justify-content: center;
  width: 100px;
  font-size: 20px;
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