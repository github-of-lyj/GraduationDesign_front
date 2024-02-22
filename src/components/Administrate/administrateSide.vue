<template>
  <div id="administrateSide">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        :router="true"
      >
        <el-menu-item index="1"
        :route="{
          name: 'AdministrateUser'
        }">
          <i class="el-icon-user"></i>
          <span slot="title" >用户</span>
        </el-menu-item>
        <el-menu-item index="2"
        :route="{
          name: 'AdministratePost'
        }">
          <i class="el-icon-document-copy"></i>
          <span slot="title" >帖子</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i  class="el-icon-document"></i>
            <span>用户发言</span>
          </template>
          <el-menu-item index="3-1"
          :route="{
            name: 'AdministratePostReply'
          }"
          >
            <i  class="el-icon-s-comment"></i>
            <span slot="title">发言</span>
          </el-menu-item>
          <el-menu-item index="3-2"
          :route="{
            name: 'AdministrateUserReply'
          }"
          >
            <i  class="el-icon-s-comment"></i>
            <span slot="title">回复</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="4"
        :route="{
          name:'AdministrateReport'
        }">
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
  width: 200px;
  margin-top: 60px;
  margin-bottom: 15px;
  display: flex;
}
</style>