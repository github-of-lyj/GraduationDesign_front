<template>
    <div id="manageUserReply">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="userReplyID" label="用户回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="userReplyContent" label="用户回复内容" width="250"></el-table-column>
      <el-table-column prop="postReplyID" label="帖子回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="postReplyContent" label="帖子回复内容" width="250"></el-table-column>
      <el-table-column prop="userName" label="发表用户" width="150" align="center"></el-table-column>
      <el-table-column prop="userReplyTime" label="发表时间" width="200" align="center"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template>
          <el-button size="mini" type="danger"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js'
export default {
data() {
    return {
      tableData: [],
    };
},
mounted(){
  pubsub.subscribe('getUserReplyByIF',(msgName,searchField) => {
    if(searchField === ''){
      axios.get('http://localhost:8080/user/UserReplyManage/selectUserReply/all').then(
        (response) => {
          this.tableData = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    }
  })
  pubsub.publish('getUserReplyByIF','')
},
beforeDestroy() {
  pubsub.unsubscribe('getUserReplyByIF')
},
}
</script>

<style scoped>
#manageUserReply {
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>