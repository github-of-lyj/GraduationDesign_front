<template>
  <div id="forumBlockInput">
    <div id="behavior">
      <p id="picture" class="el-icon-chat-line-square">发表新帖</p>
    </div>
    <el-input
      v-model="publishData.postTitle"
      placeholder="请填写标题"
    ></el-input>
    <div id="behavior"></div>
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
      <el-button type="primary" plain @click="publish">发表</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      publishData: {
        postTitle: "",
        postReplyContent: "",
        userID: "",
        blockID: "",
        postID: "",
      },
    };
  },
  methods: {
    publish() {
      var userData = JSON.parse(localStorage.getItem("user"));
      if (userData != null) {
        axios.post("http://192.168.23.129/user/checkLogin", userData).then(
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
              this.publishData.userID = userData.userID
              this.publishData.blockID = this.$route.params.blockid
              axios.post('http://192.168.23.129/user/post/insertNewPost',this.publishData).then(
                (response) => {
                  if(response.data.description){
                    this.$message({
                    message: response.data.description,
                    type: 'error'
                    })
                  }else{
                    this.publishData.postID = response.data
                    axios.post('http://192.168.23.129/user/postReply/insertNewPostReply',this.publishData).then(
                      (response) => {
                        if(response.data.description){
                          this.$message({
                          message: response.data.description,
                          type: 'error'
                          })
                        }else{
                          this.$router.push({
                            name: 'ForumBlockPost',
                            params:{
                              postid:this.publishData.postID
                            }
                          })
                        }
                      },
                      (error) => {
                        console.log(error)
                      }
                    )
                  }
                },
                (error) => {
                  console.log(error)
                }
              )
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }else{
        this.$message({
          message: '用户未登录',
        })
      }
    },
  },
  mounted() {


  },
};
</script>

<style scoped>
#forumBlockInput {
  border: 1px dotted black;
  padding-left: 20px; 
  margin-top: 50px;
  padding-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
#behavior {
  padding-top: 10px;
  padding-bottom: 10px;
}
#picture {
  margin-right: 10px;
}
#replyButton {
  padding: 10px;
  padding-left: 0;
}
</style>