<template>
  <div id="forumBlockPostItem">
    <ul>
      <li v-for="post in postList" :key="post.postID">
        <postItemLeft :postData = post></postItemLeft>
        <postItemRight :postData = post></postItemRight>
      </li>
    </ul>
  </div>
</template>

<script>
import postItemLeft from "./BlockPostItem/postItemLeft";
import postItemRight from "./BlockPostItem/postItemRight";
import axios from 'axios';
export default {
  data() {
    return {
      postList: {},
    };
  },
  components: { postItemLeft, postItemRight },
  watch:{
    '$route.path':{
      handler(){
        axios.get(`http://localhost:8080/user/post/getPosts/${this.$route.params.blockid}`).then(
          (response) => {
            this.postList = response.data
          },
          (error) => {
            console.log(error)
          }
        )
      }
    }
  },
  mounted(){
    axios.get(`http://localhost:8080/user/post/getPosts/${this.$route.params.blockid}`).then(
      (response) => {
        this.postList = response.data
      },
      (error) => {
        console.log(error)
      }
    )

  }
};
</script>

<style scoped>
#forumBlockPostItem {
  margin-left: 20px;
  width: 800px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
  border: 1px black dashed;
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>