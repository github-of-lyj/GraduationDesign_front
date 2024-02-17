<template>
  <div id="postHeader">
    <div id="headerPart1">回复:{{postData.replyNumber}}</div>
    <div id="headerPart2">
      <router-link :to="{
        name:'ForumBlockPage',
        params:{
          blockid:1
        }
      }">{{postData.blockName}}</router-link> >> {{postData.postTitle}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js'
export default {
    data() {
      return {
        postData: {},
      };
    },
    mounted(){
    axios.get(`http://localhost:8080/user/post/getPost/${this.$route.params.postid}`).then(
      (response) => {
        this.postData = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    pubsub.subscribe('updateReplyNumber', ()=>{
      this.postData.replyNumber = this.postData.replyNumber + 1
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe('updateReplyNumber')
  },
};
</script>

<style scoped>
#postHeader {
  display: flex;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 5px;
}
#headerPart1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141.6px;
  color: #999 !important;
  font-size: 12px;
}
#headerPart2 {
  padding-left: 20px;
  font-weight: bold;
  font-size: 15px;
}
</style>