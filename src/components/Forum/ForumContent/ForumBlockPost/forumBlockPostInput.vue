<template>
  <div id="forumBlockInput">
    <el-input
      type="textarea"
      placeholder="请输入内容"
      resize="none"
      v-model="publishData.postReplyContent"
      :rows="5"
      maxlength="100"
      show-word-limit
    >
    </el-input>
    <div id="replyButton">
      <el-button type="primary" plain @click="publish">发表回复</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import pubsub from "pubsub-js"
export default {
  data() {
    return {
      publishData: {
        userID: "",
        postID: "",
        postReplyContent: "",
      },
    };
  },
  methods: {
    publish() {
      var userData = JSON.parse(localStorage.getItem("user"));
      if (userData != null) {
        axios.post("http://localhost:8080/user/checkLogin", userData).then(
          (response) => {
            if (response.data.description) {
              this.$message({
                message: response.data.description,
                type: "warning",
              });
              localStorage.removeItem("user");
              this.isLogin = false;
              this.userData = {};
            } else {
              this.publishData.userID = userData.userID;
              this.publishData.postID = this.$route.params.postid;
              axios.post("http://localhost:8080/user/postReply/insertNewPostReply",this.publishData)
                .then(
                  () => {
                    console.log("执行了")
                    pubsub.publish('updateReply')
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              this.publishData.postReplyContent = ""
            }
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.$message({
          message: "用户未登录",
        });
      }
    },
  },
};
</script>

<style scoped>
#forumBlockInput {
  margin-top: 40px;
  margin-left: 250px;
  margin-right: 250px;
}
#picture {
  margin-right: 10px;
}
#replyButton {
  padding: 10px;
  padding-left: 0;
}
</style>