<template>
    <div id="manageUserReply">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column prop="userReplyID" label="用户回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="userReplyContent" label="用户回复内容" width="250"></el-table-column>
      <el-table-column prop="postReplyID" label="帖子回复ID" width="100" align="center"></el-table-column>
      <el-table-column prop="postReplyContent" label="帖子回复内容" width="250"></el-table-column>
      <el-table-column prop="userName" label="发表用户" width="100" align="center"></el-table-column>
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
export default {
data() {
    return {
      tableData: [
        {
          userReplyID: 1,
          userReplyContent: "postReplyContent",
          postReplyID: 2,
          postReplyContent: "postReplyContent",
          userName: "userName",
          userReplyTime: "userReplyTime"
        },
        {
          userReplyID: 3,
          userReplyContent: "postReplyContent",
          postReplyID: 4,
          postReplyContent: "postReplyContent",
          userName: "userName",
          userReplyTime: "userReplyTime"
        },
        {
          userReplyID: 5,
          userReplyContent: "postReplyContent",
          postReplyID: 6,
          postReplyContent: "postReplyContent",
          userName: "userName",
          userReplyTime: "userReplyTime"
        },
      ],
    };
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