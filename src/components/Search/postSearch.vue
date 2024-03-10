<template>
  <div>
    <div v-if="!(postSearchList.length && postReplySearchList.length)" id="nullResult">
      <p>查询结果为空  ≥﹏≤</p>
    </div>
    <div id="postSearch">
      <div class="divider"></div>
      <div>
        <div  v-for="post in postSearchList" :key="post.postID">
          <postResult :post = post></postResult>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <div v-for="postReply in postReplySearchList" :key="postReply.postReplyID">
          <replyResult :postReply = postReply></replyResult>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import postResult from "./PostSearch/postResult"
import replyResult from "./PostSearch/replyResult"
import axios from 'axios'
export default {
  components:{postResult,replyResult},
  data() {
    return {
      postSearchList:{},
      postReplySearchList:{}
    };
  },
  mounted(){
    axios.get(`http://192.168.23.129/user/PostSearch/getPost/${this.$route.params.searchname}`).then(
      (response) => {
        this.postSearchList = response.data
      }, 
      (error) => {
        console.log(error)
      }

    )
    axios.get(`http://192.168.23.129/user/PostReplySearch/getPostReply/${this.$route.params.searchname}`).then(
      (response) => {
        this.postReplySearchList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#nullResult{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
#postSearch {
  justify-content: center;
  display: flex;
  margin: 15px;
}
.divider {
  background-color: #DCDFE6;
  display: inline-block;
  width: 1px;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>