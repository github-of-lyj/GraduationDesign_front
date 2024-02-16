<template>
  <div>
    <postHeader></postHeader>
      <div v-for="postReply in postReplyList" :key="postReply.postReplyID">
        <div id="forumBlockPost" >
          <userData :userName = postReply.userName></userData>
          <replyContent :postReply = postReply></replyContent>
        </div>
      </div>
    <forumBlockPostInput></forumBlockPostInput>
  </div>
</template>

<script>
import postHeader from "../../components/Forum/ForumContent/ForumBlockPost/postHeader";
import userData from "../../components/Forum/ForumContent/ForumBlockPost/userData";
import replyContent from "../../components/Forum/ForumContent/ForumBlockPost/replyContent";
import forumBlockPostInput from "../../components/Forum/ForumContent/ForumBlockPost/forumBlockPostInput";
import axios from 'axios'
import pubsub from 'pubsub-js'

export default {
  data() {
    return {
      postReplyList: {},
    };
  },
  components: { userData, replyContent, postHeader , forumBlockPostInput},
  watch:{
    "$route.path":{
      handler(){
        axios.get(`http://localhost:8080/user/postReply/getAllReplyFromPost/${this.$route.params.postid}`).then(
          (response) => {
            this.postReplyList = response.data
          },
          (error) => {
            console.log(error)
          }
        )
          }
    }
  },
  mounted(){
    axios.get(`http://localhost:8080/user/postReply/getAllReplyFromPost/${this.$route.params.postid}`).then(
      (response) => {
        this.postReplyList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    pubsub.subscribe('updateReply',() => {
      axios.get(`http://localhost:8080/user/postReply/getAllReplyFromPost/${this.$route.params.postid}`).then(
        (response) => {
          this.postReplyList = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    })
  },
  beforeDestroy(){
    pubsub.unsubscribe('updateReply')
  }

};
</script>

<style>
#forumBlockPost {
  display: flex;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 5px;
  border: 1px #e5e5e5 solid;
}
</style>