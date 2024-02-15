<template>
  <div id="right">
    <div id="author">
      <div>
        <p><i class="el-icon-user"></i>{{postData.userName}}</p>
      </div>
      <div id="date">
        <p>{{postData.postDate}}</p>
      </div>
    </div>
    <div id="latestAnswer">
      <p><i class="el-icon-news"></i>{{latestAnswerName}}</p>
      <p id="date">{{latestAnswerDate}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      latestAnswerName: '',
      latestAnswerDate: ''
    };
  },
  props:['postData'],
  mounted(){
    axios.get(`http://localhost:8080/user/postReply/getLatestPostReplyFromPost/${this.postData.postID}`).then(
      (response) => {
        this.latestAnswerName = response.data.userName
        this.latestAnswerDate = response.data.postReplyTime
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#right {
  display: flex;
  padding: 20px;
}
#author{
  text-align: center;
}
#latestAnswer {
  text-align: center;
  margin-left: 40px;
}
#date{
  display: flex;
  justify-content: center;
}
p{
    margin: 0;
}
</style>