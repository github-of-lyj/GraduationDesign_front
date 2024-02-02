<template>
  <div id="forumBlockSide">
    <el-col :span="12" >
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">板块导航</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key) {
      console.log(key);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
#forumBlockSide {
  margin-top: 60px;
  margin-bottom: 15px;
  display: flex;
}
.el-menu {
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.el-col-12{
  width: 200px;
}
</style>