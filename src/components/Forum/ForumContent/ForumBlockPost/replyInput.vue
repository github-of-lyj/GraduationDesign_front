<template>
  <div id="demo">
    <el-input
      type="textarea"
      :rows="4"
      resize="none"
      placeholder="请输入内容"
      v-model="userReply.userReplyContent"
      maxlength="30"
      show-word-limit
    >
    </el-input>
    <div id="replyButton">
      <el-button type="primary" plain @click="publish">发表回复</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      userReply:{
        userID: "",
        postReplyID: "",
        postID: "",
        userReplyContent:"",
      }
    };
  },
  methods:{
    publish(){
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
              this.userReply.userID = userData.userID;
              axios.post('http://localhost:8080/user/userReply/insertNewUserReply',this.userReply).then(
                (response) => {
                  if(response.data.description){
                    this.$message({
                      message: response.data.description,
                      type: 'error'
                    })
                  }else{
                    pubsub.publish('updateUserReply')
                    pubsub.publish('updateReplyNumber')
                  }
                },
                (error) => {
                  console.log(error)
                }
              )
              this.userReply.userReplyContent = ""
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


    }
  },
  mounted(){
    this.userReply.postReplyID = this.postReplyID
    this.userReply.postID = this.$route.params.postid
  },
  props:['postReplyID']
};
</script>

<style scoped>
#demo{
    padding: 20px;
}
#picture{
  margin-right: 10px;
}
#replyButton{
  padding: 10px;
  padding-left: 0;
}
.el-textarea{
  margin-top: 5px;
}
.el-button{
  font-size: 10px;
}

</style>