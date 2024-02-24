<template>
    <div id="managePost">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="postID" label="帖子ID" width="100" align="center"></el-table-column>
      <el-table-column prop="postTitle" label="帖子名称" width="250"></el-table-column>
      <el-table-column prop="replyNumber" label="帖子回复数" width="150" align="center"></el-table-column>
      <el-table-column prop="userName" label="发起用户" width="150" align="center"></el-table-column>
      <el-table-column prop="postDate" label="发表时间" width="250" align="center"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template>
          <el-button size="mini" type="danger"> 删除 </el-button>
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
mounted(){
  pubsub.subscribe('getPostByIF',(msgName,searchField) => {
    if(searchField === ''){
      axios.get('http://localhost:8080/user/PostManage/selectPost/all').then(
        (response) => {
          this.tableData = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    }
  })
  pubsub.publish('getPostByIF','')
},
beforeDestroy() {
  pubsub.unsubscribe('getPostByIF')
},
}
</script>

<style scoped>
#managePost {
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>