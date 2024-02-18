<template>
  <div id="currentUserHistory">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">我的帖子</span>
        <div>
          <div v-for="PostSearch in  PostSearchList.slice(curPage*pageSize, curPage*pageSize + pageSize)" :key="PostSearch.postID">
            <currentUserPostItem :PostSearch = PostSearch></currentUserPostItem>
          </div>
        </div>
        <el-pagination
          small
          layout="prev, pager, next , jumper"
          :total="PostSearchList.length"
          :page-size="pageSize"
          @current-change="pageChange"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" class="fontClass">我的发言</span>
        <div>
          <div v-for="PostReplySearch in PostReplySearchList.slice(curPage*pageSize, curPage*pageSize + pageSize)" :key="PostReplySearch.postReplyID">
            <currentUserReplyItem :PostReplySearch = PostReplySearch></currentUserReplyItem>
          </div>
        </div>
        <el-pagination
          small
          layout="prev, pager, next , jumper"
          :total="PostReplySearchList.length"
          :page-size="pageSize"
          @current-change="pageChange"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import currentUserPostItem from "./currentUserHistory/currentUserPostItem"
import currentUserReplyItem from './currentUserHistory/currentUserReplyItem';
import axios from "axios"
export default {
  data() {
    return {
      PostSearchList:[],
      PostReplySearchList:[],
      pageSize: 3,
      curPage: 0,
      length,
    };
  },
  methods:{
    pageChange(page){
      console.log("@")
      this.curPage = page - 1
    }
  },
  components:{currentUserPostItem,currentUserReplyItem},
  mounted(){
    var userData = JSON.parse(localStorage.getItem("user"));
    axios.get(`http://localhost:8080/user/PostSearch/selectUserPost/${userData.userID}`).then(
      (response) => {
        this.PostSearchList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(`http://localhost:8080/user/PostReplySearch/selectPostReply/${userData.userID}`).then(
      (response) => {
        this.PostReplySearchList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#currentUserHistory {
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