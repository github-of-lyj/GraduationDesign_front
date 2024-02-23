<template>
  <div id="manageUser">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="userID" label="用户ID" width="100"></el-table-column>
      <el-table-column prop="userName" label="用户名称" width="200"></el-table-column>
      <el-table-column prop="userAccount" label="用户邮箱" width="250"></el-table-column>
      <el-table-column
        :formatter="getAuthority"
        label="用户权限"
        width="200"
      >
      </el-table-column>
      <el-table-column label="操作" width="400">
        <template  slot-scope="scope">
          <el-button size="mini"  v-if="scope.row.authority.includes('1')">封号</el-button>
          <el-button size="mini"  v-if="!scope.row.authority.includes('1')">解封</el-button>
          <el-button size="mini"  v-if="scope.row.authority.includes('2')"> 禁言 </el-button>
          <el-button size="mini"  v-if="!scope.row.authority.includes('2')"> 解除禁言 </el-button>
          <el-button size="mini"  v-if="scope.row.authority.includes('3')"> 禁止上传下载 </el-button>
          <el-button size="mini"  v-if="!scope.row.authority.includes('3')"> 允许上传下载 </el-button>
          <el-button size="mini" type="danger"> 删除用户 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    getAuthority(userData) {
      var authority = "";
      if (userData.authority.includes("1")) authority += "登录 ";
      if (userData.authority.includes("2")) authority += "发言 ";
      if (userData.authority.includes("3")) authority += "上传下载";
      return authority;
    },
  },
  data() {
    return {
      tableData: [
        {
          userID: "1",
          userName: "userName",
          userAccount: "userAccount",
          authority: "12",
        },
        {
          userID: "2",
          userName: "userName",
          userAccount: "userAccount",
          authority: "13",
        },
        {
          userID: "3",
          userName: "userName",
          userAccount: "userAccount",
          authority: "23",
        },
      ],
    };
  },
};
</script>

<style scoped>
#manageUser {
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>