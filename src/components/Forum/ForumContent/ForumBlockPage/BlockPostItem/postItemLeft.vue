<template>
  <div id="left">
    <administrateDialog :reportContentData = reportContentData></administrateDialog>
    <div id="replyNumber" class="el-icon-message">
      <p style="margin-left: 3px;">{{postData.replyNumber}}</p>
    </div>
    <div id="postTitle_Content">
      <router-link
        :to="{
          name: 'ForumBlockPost',
          params: {
            postid: postData.postID,
          },
        }"
        id="postTitle">
          {{postData.postTitle}}
        </router-link>
      <p id="content">{{postContent}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import administrateDialog from '../../../../Administrate/administrateDialog'
export default {
  data() {
    return {
      postContent: "",
      reportContentData:{
        reportContentPosition:"帖子",
        reportContentID:this.postData.postID,
        reportContent:this.postData.postTitle,
        publishUser:this.postData.userName,
      }
    };
  },
  components:{administrateDialog},
  props:['postData'],
  mounted(){
    axios.get(`http://192.168.23.129/user/postReply/getEarliestPostReplyFromPost/${this.postData.postID}`).then(
      (response) => {
        this.postContent = response.data.postReplyContent
      },
      (error) => {
        console.log(error)
      }
    )
  },
  
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