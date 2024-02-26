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
          <el-button size="mini"  v-if="scope.row.authority.includes('1')" @click="modifyUserAuthority(scope.row.userID,scope.row.authority.replace('1',''))">封号</el-button>
          <el-button size="mini"  v-if="!scope.row.authority.includes('1')" @click="modifyUserAuthority(scope.row.userID,scope.row.authority + '1')">解封</el-button>
          <el-button size="mini"  v-if="scope.row.authority.includes('2')" @click="modifyUserAuthority(scope.row.userID,scope.row.authority.replace('2',''))"> 禁言 </el-button>
          <el-button size="mini"  v-if="!scope.row.authority.includes('2')" @click="modifyUserAuthority(scope.row.userID,scope.row.authority + '2')"> 解除禁言 </el-button>
          <el-button size="mini" type="danger"> 删除用户 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
export default {
  methods: {
    getAuthority(userData) {
      var authority = "";
      if (userData.authority.includes("1")) authority += "登录 ";
      if (userData.authority.includes("2")) authority += "发言 ";
      if (userData.authority.includes("3")) authority += "上传下载";
      if(authority === "")
        authority += "用户无权限"
      return authority;
    },
    modifyUserAuthority(userID,authority){
      axios.post(`http://localhost:8080/user/UserManage/modifyUserAuthority/${userID}/${authority}`).then(
        ()=>{
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          pubsub.publish('getUserByIF','')
        },
        (error) => {
          console.log(error)
        }
      )
    }
  },
  data() {
    return {
      tableData: [],
    };
  },
  mounted(){
    pubsub.subscribe('getUserByIF',(msgName,searchField) => {
      if(searchField === ''){
        axios.get('http://localhost:8080/user/UserManage/selectUser/all').then(
          (response) => {
            this.tableData = response.data
          },
          (error) => {
            console.log(error)
          }
        )
      }else{
        axios.get(`http://localhost:8080/user/UserManage/selectUser/${searchField}`).then(
          (response) => {
            this.tableData = response.data
          },
          (error) => {
            console.log(error)
          }
        )
      }
    })
    pubsub.publish('getUserByIF','')

  },
  beforeDestroy(){
    pubsub.unsubscribe('getUserByIF')
  }
};
</script>

<style scoped>
#manageUser {
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>