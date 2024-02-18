<template>
  <div>
    <postHeader></postHeader>
      <div v-for="postReply in postReplyList.slice(curPage*pageSize, curPage*pageSize + pageSize)" :key="postReply.postReplyID">
        <div id="forumBlockPost" >
          <userData :userName = postReply.userName></userData>
          <replyContent :postReply = postReply></replyContent>
        </div>
      </div>
      <el-pagination
          layout="prev, pager, next , jumper"
          :total="postReplyList.length"
          :page-size="pageSize"
          @current-change="pageChange"
        >
     </el-pagination>
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
      postReplyList: [],
      pageSize: 10,
      curPage: 0,
    };
  },
  components: { userData, replyContent, postHeader , forumBlockPostInput},
  methods:{
    pageChange(page){
      console.log("@")
      this.curPage = page - 1
    }
  },
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
    pubsub.subscribe('updatePostReply',() => {
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
    pubsub.unsubscribe('updatePostReply')
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
.el-pagination{
  text-align: center;
}
</style>