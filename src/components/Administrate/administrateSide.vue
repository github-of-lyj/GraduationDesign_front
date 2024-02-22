<template>
  <div id="administrateSide">
    <el-col :span="4">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <i class="el-icon-user"></i>
          <span slot="title" >用户</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document-copy"></i>
          <span slot="title" >帖子</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i  class="el-icon-document"></i>
            <span>用户发言</span>
          </template>
          <el-menu-item index="3-1">
            <i  class="el-icon-s-comment"></i>
            <span slot="title">发言</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i  class="el-icon-s-comment"></i>
            <span slot="title">回复</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-s-release"></i>
          <span slot="title">举报 </span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {

};
</script>

<style>
#administrateSide {
  margin-top: 60px;
  margin-bottom: 15px;
  display: flex;
}
</style>