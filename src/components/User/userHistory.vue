<template>
  <div id="userHistory">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">该用户的帖子</span>
        <div>
          <div v-for="searchPost in searchPostList.slice(curPage*pageSize, curPage*pageSize + pageSize)" 
          :key="searchPost.postID">
            <userPostItem :searchPost = searchPost></userPostItem> 
          </div>
        </div>
        <el-pagination
          small
          layout="prev, pager, next , jumper"
          :total="searchPostList.length"
          :page-size="pageSize"
          @current-change="pageChange"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" class="fontClass">该用户的回复</span>
        <div>
          <div v-for="searchPostReply in searchPostReplyList.slice(curPage*pageSize, curPage*pageSize + pageSize)"
          :key="searchPostReply.postReplyID">
            <userReplyItem :searchPostReply = searchPostReply></userReplyItem>
          </div>
        </div>
        <el-pagination
          small
          layout="prev, pager, next , jumper"
          :total="searchPostReplyList.length"
          :page-size="pageSize"
          @current-change="pageChange"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userPostItem from './UserHistory/userPostItem'
import userReplyItem from './UserHistory/userReplyItem'
import axios from 'axios'
export default {
  data() {
    return {
      searchPostList:[],
      searchPostReplyList:[],
      pageSize: 3,
      curPage: 0,
    };
  },
  components:{userPostItem,userReplyItem},
  methods:{
    pageChange(page){
      console.log("@")
      this.curPage = page - 1
    }
  },
  mounted(){
    axios.get(`http://192.168.23.129/user/PostSearch/selectUserPost/${this.$route.params.userid}`).then(
      (response) => {
        this.searchPostList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(`http://192.168.23.129/user/PostReplySearch/selectPostReply/${this.$route.params.userid}`).then(
      (response) => {
        this.searchPostReplyList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#userHistory {
  margin-left: 30px;
  width: 70%;
}
#newsList {
  width: 33%;
}
.el-tabs {
  width: 90%;
  height: 100%;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}
.fontClass {
  font-size: 20px;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>