<template>
    <div id="managePostReply">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="postReplyID" label="帖子回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="postReplyContent" label="帖子回复内容" width="250"></el-table-column>
      <el-table-column prop="postTitle" label="回复帖子名称" width="150" align="center"></el-table-column>
      <el-table-column prop="userName" label="发表用户" width="150" align="center"></el-table-column>
      <el-table-column prop="postReplyTime" label="发表时间" width="250" align="center"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template  slot-scope="props">
          <el-button size="mini" type="danger" @click="deletePostReply(props.row.postReplyID)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
export default {
data() {
    return {
      tableData: [],
    };
},
methods:{
  deletePostReply(postReplyID){
    console.log(postReplyID)
    axios.post(`http://localhost:8080/user/PostReplyManage/deletePostReply/${postReplyID}`).then(
      () => {
        this.$message({
          message:'删除成功',
          type: 'success'
        })
        pubsub.publish('getPostReplyByIF','')
      },
      (error) => {
        console.log(error)
      }
    )
  }
},
mounted(){
  pubsub.subscribe('getPostReplyByIF',(msgName,searchField) => {
    if(searchField === ''){
      axios.get('http://localhost:8080/user/PostReplyManage/selectPostReply/all').then(
        (response) => {
          this.tableData = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    }else{
      axios.get(`http://localhost:8080/user/PostReplyManage/selectPostReply/${searchField}`).then(
        (response) => {
          this.tableData = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    }
  })
  pubsub.publish('getPostReplyByIF','')
},
beforeDestroy(){
  pubsub.unsubscribe('getPostReplyByIF')
}
}
</script>

<style scoped>
#managePostReply {
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>