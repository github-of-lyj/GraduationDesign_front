<template>
  <div id="currentUserReplyItem">
    <div id="news">
      <div style="display: flex;align-items: center;">
        <router-link
          id="nameRouter"
          class="hvr-shrink"
          :to="{
            name: 'ForumBlockPost',
            params: {
              postid: PostReplySearch.postID,
            },
          }"
          >{{PostReplySearch.postTitle}}</router-link
        >
        <p id="postContent">{{PostReplySearch.postReplyContent}}</p>
      </div>
      <div style="display: flex; align-items: center">
        <el-badge :value="replyNumber" class="item" type="primary">
          <div class="el-icon-s-comment"></div>
        </el-badge>
        <p id="time">{{PostReplySearch.postReplyTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      replyNumber: '?'
    };
  },
  props:['PostReplySearch'],
  mounted(){
    axios.get(`http://localhost:8080/user/userReply/selectUserReplyCount/${this.PostReplySearch.postReplyID}`).then(
      (response) => {
        this.replyNumber = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#currentUserReplyItem {
  margin-top: 5px;
  margin-bottom: 5px;
}
#news {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#time {
  float: right;
  font-size: 15px;
}
#nameRouter {
  text-decoration: none;
  color: black;
  font-size: 15px;
  width: 150px;
}
#postContent {
  font-size: 14px;
  margin-left: 10px;
  width: 500px;
  overflow-wrap: break-word;
}
.el-badge {
  font-size: 25px;
  margin-right: 30px;
}
</style>