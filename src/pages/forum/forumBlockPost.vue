<template>
  <div>
    <postHeader :postData = postData></postHeader>
    <div id="forumBlockPost">
      <userData></userData>
      <replyContent></replyContent>
    </div>
    <div id="forumBlockPost">
      <userData></userData>
      <replyContent></replyContent>
    </div>
    <forumBlockPostInput></forumBlockPostInput>
  </div>
</template>

<script>
import postHeader from "../../components/Forum/ForumContent/ForumBlockPost/postHeader";
import userData from "../../components/Forum/ForumContent/ForumBlockPost/userData";
import replyContent from "../../components/Forum/ForumContent/ForumBlockPost/replyContent";
import forumBlockPostInput from "../../components/Forum/ForumContent/ForumBlockPost/forumBlockPostInput";
import axios from 'axios';
export default {
  data() {
    return {
      postData: {},
    };
  },
  components: { userData, replyContent, postHeader , forumBlockPostInput},
  mounted(){
    axios.get(`http://localhost:8080/user/post/getPost/${this.$route.params.postid}`).then(
      (response) => {
        this.postData = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    
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