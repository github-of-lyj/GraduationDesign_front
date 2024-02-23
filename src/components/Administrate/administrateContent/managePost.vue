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
export default {
data() {
    return {
      tableData: [
        {
          postID: "1",
          postTitle: "postTitle",
          replyNumber: 1,
          userName: "userName",
          postDate: "postDate"
        },
        {
          postID: "2",
          postTitle: "postTitle",
          replyNumber: 2,
          userName: "userName",
          postDate: "postDate"
        },
        {
          postID: "3",
          postTitle: "postTitle",
          replyNumber: 3,
          userName: "userName",
          postDate: "postDate"
        },
      ],
    };
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