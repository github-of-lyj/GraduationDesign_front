<template>
  <div id="hotPost">
    <classHead classTitle="热帖" :isPage="false" className="el-icon-chat-line-square"></classHead>
    <div id="hotPostItem">
      <ul>
        <li v-for="hotPost in hotPostList" :key="hotPost.postID">
          <postLeft :hotPost = hotPost></postLeft>
          <postRight :hotPost = hotPost></postRight>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import classHead from "../classHead.vue"
import postLeft from "./postLeft.vue"
import postRight from "./postRight.vue"
export default {
  data() {
    return {
      hotPostList: [],
    };
  },
  components:{classHead,postLeft,postRight},
  mounted(){
    axios.get('http://localhost:8080/user/PostSearch/selectHotPost').then(
      (response) => {
        this.hotPostList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#hotPost {
  width: 25%;
  margin: 15px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
  padding: 16px;
}
#hotPostItem{
  display: flex;
}
ul {
  margin: 0;
  margin-top: 10px;
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

</style>