<template>
  <div id="left">
    <div id="replyNumber" class="el-icon-message">
      <p style="margin-left: 3px;">{{postData.replyNumber}}</p>
    </div>
    <div id="postTitle_Content">
      <router-link
        :to="{
          name: 'ForumBlockPost',
          params: {
            postid: 2,
          },
        }"
        id="postTitle"
        >{{postData.postTitle}}</router-link>
      <p id="content">{{postContent}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      postContent: "",
    };
  },
  props:['postData'],
  mounted(){
    axios.get(`http://localhost:8080/user/postReply/getEarliestPostReplyFromPost/${this.postData.postID}`).then(
      (response) => {
        this.postContent = response.data.postReplyContent
      },
      (error) => {
        console.log(error)
      }
    )
  }

};
</script>

<style scoped>
#left {
  display: flex;
  padding: 20px;
}
#replyNumber {
  display: flex;
  align-items: center;
  font-size: 15px;
}
#postTitle_Content {
  display: flex;
  margin-left: 50px;
}
#postTitle {
  font-size: 20px;
}
#content {
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 50px;
}
#left div {
  padding: 10px;
}
p{
  margin: 0;
}
</style>