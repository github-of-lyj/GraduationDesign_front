<template>
  <div id="right">
    <div>
      <div id="author">
        <router-link 
          :to="{
            name: 'User',
            params: {
              userid: hotPost.userID,
            }
          }">
          <i class="el-icon-user"></i> {{hotPost.userName}}
        </router-link>
      </div>
      <div id="latestAnswer">
        <router-link 
          :to="{
            name: 'User',
            params: {
              userid: LatestAnswer.userID,
            }
          }">
          <i class="el-icon-news"></i> {{LatestAnswer.userName}}
        </router-link>
      </div>
      <div id="date"><i class="el-icon-time"></i> {{hotPost.postDate}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      LatestAnswer: {},
    };
  },
  props:['hotPost'],
  mounted(){
    axios.get(`http://localhost:8080/user/postReply/getLatestPostReplyFromPost/${this.hotPost.postID}`).then(
      (response) => {
        this.LatestAnswer = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style>
#right {
  display: flex;
  align-items: center;
  font-size: 10px;
}
a {
  text-decoration: none;
}
</style>