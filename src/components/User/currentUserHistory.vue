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
      <el-tab-pane>
        <span slot="label" class="fontClass">
          新的回复
          <el-badge :value="totalNewReply" class="item" type="danger" v-if="NewPostReplyList.length">
          </el-badge>
        </span>
        <div>
          <div v-for="(NewPostReply,index) in NewPostReplyList" :key="index">
            <currentUserNewReply :NewPostReply = NewPostReply></currentUserNewReply>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import currentUserPostItem from "./currentUserHistory/currentUserPostItem"
import currentUserReplyItem from './currentUserHistory/currentUserReplyItem';
import currentUserNewReply from './currentUserHistory/currentUserNewReply';
import axios from "axios"
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      PostSearchList:[],
      PostReplySearchList:[],
      NewPostReplyList:[],
      totalNewReply:0,
      pageSize: 3,
      curPage: 0,
      length,
    };
  },
  methods:{
    pageChange(page){
      this.curPage = page - 1
    }
  },
  components:{currentUserPostItem,currentUserReplyItem,currentUserNewReply},
  mounted(){
    var userData = JSON.parse(localStorage.getItem("user"));
    pubsub.subscribe("getNewPostReplyList",(msgName,userID) => {
      axios.get(`http://192.168.23.129/user/postReply/getNewPostReplyList/${userID}`).then(
        (response) => {
          var NewPostReplyList = []
          for(var i = 0;i < response.data.length;i++){
            NewPostReplyList.push(JSON.parse(response.data[i]))
            this.totalNewReply += parseInt(JSON.parse(response.data[i]).huifushu)
          }
          this.NewPostReplyList = NewPostReplyList
        }
      )
    })
    pubsub.publish("getNewPostReplyList",userData.userID)
    axios.get(`http://192.168.23.129/user/PostSearch/selectUserPost/${userData.userID}`).then(
      (response) => {
        this.PostSearchList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(`http://192.168.23.129/user/PostReplySearch/selectPostReply/${userData.userID}`).then(
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