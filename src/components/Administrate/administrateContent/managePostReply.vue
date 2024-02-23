<template>
    <div id="managePostReply">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="postReplyID" label="帖子回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="postReplyContent" label="帖子回复内容" width="250"></el-table-column>
      <el-table-column prop="postTitle" label="回复帖子名称" width="150" align="center"></el-table-column>
      <el-table-column prop="userName" label="发表用户" width="150" align="center"></el-table-column>
      <el-table-column prop="postReplyTime" label="发表时间" width="250" align="center"></el-table-column>
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
          postReplyID: "1",
          postReplyContent: "postReplyContent",
          postTitle: "postTitle",
          userName: "userName",
          postReplyTime: "postReplyTime"
        },
        {
          postReplyID: "2",
          postReplyContent: "postReplyContent",
          postTitle: "postTitle",
          userName: "userName",
          postReplyTime: "postReplyTime"
        },
        {
          postReplyID: "3",
          postReplyContent: "postReplyContent",
          postTitle: "postTitle",
          userName: "userName",
          postReplyTime: "postReplyTime"
        },
      ],
    };
},
}
</script>

<style scoped>
#managePostReply {
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>