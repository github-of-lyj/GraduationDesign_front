<template>
  <div id="right">
    <div id="author">
      <div>
        <p><i class="el-icon-user"></i>{{author}}</p>
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
      author: '',
      latestAnswerName: '',
      latestAnswerDate: ''
    };
  },
  props:['postData'],
  mounted(){
    axios.get(`http://localhost:8080/user/getUserName/${this.postData.userID}`).then(
      (response) => {
        this.author = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(`http://localhost:8080/user/postReply/getLatestPostReplyFromPost/${this.postData.postID}`).then(
      (response) => {
        this.latestAnswerDate = response.data.postReplyTime
        axios.get(`http://localhost:8080/user/getUserName/${response.data.userID}`).then(
          (response) => {
            this.latestAnswerName = response.data
          },
          (error) => {
            console.log(error)
          }
        )
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