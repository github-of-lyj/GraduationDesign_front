<template>
    <div id="manageUserReply">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="userReplyID" label="用户回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="userReplyContent" label="用户回复内容" width="250"></el-table-column>
      <el-table-column prop="postReplyID" label="被回复内容ID" width="110" align="center"></el-table-column>
      <el-table-column prop="postReplyContent" label="被回复内容" width="250"></el-table-column>
      <el-table-column prop="userName" label="发表用户" width="150" align="center"></el-table-column>
      <el-table-column prop="userReplyTime" label="发表时间" width="200" align="center"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template  slot-scope="props">
          <el-button size="mini" type="danger" @click="deleteUserReply(props.row.userReplyID)"> 删除 </el-button>
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
methods:{
  deleteUserReply(userReplyID){
    axios.post(`http://localhost:8080/user/UserReplyManage/deleteUserReply/${userReplyID}`).then(
      () => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        pubsub.publish('getUserReplyByIF','')
      },
      (error) => {
        console.log(error)
      }
    )
  }
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
    }else{
      axios.get(`http://localhost:8080/user/UserReplyManage/selectUserReply/${searchField}`).then(
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