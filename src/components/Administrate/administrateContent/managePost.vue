<template>
    <div id="managePost">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="postID" label="帖子ID" width="100" align="center"></el-table-column>
      <el-table-column prop="postTitle" label="帖子名称" width="250"></el-table-column>
      <el-table-column prop="blockName" label="板块名称" width="100"></el-table-column>
      <el-table-column prop="replyNumber" label="帖子回复数" width="100" align="center"></el-table-column>
      <el-table-column prop="userName" label="发起用户" width="150" align="center"></el-table-column>
      <el-table-column prop="postDate" label="发表时间" width="200" align="center"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template  slot-scope="props">
          <el-button size="mini" type="danger" @click="deletePost(props.row.postID)"> 删除 </el-button>
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
  deletePost(postID){
    console.log(postID)
    axios.post(`http://192.168.23.129/user/PostManage/deletePost/${postID}`).then(
      () => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        pubsub.publish('getPostByIF','')
      },
      (error) => {
        console.log(error)
      }
    )

  }
},
mounted(){
  pubsub.subscribe('getPostByIF',(msgName,searchField) => {
    if(searchField === ''){
      axios.get('http://192.168.23.129/user/PostManage/selectPost/all').then(
        (response) => {
          this.tableData = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    }else{
      axios.get(`http://192.168.23.129/user/PostManage/selectPost/${searchField}`).then(
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