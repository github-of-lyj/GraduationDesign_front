<template>
  <div id="otherReply">
    <el-badge :value="number" class="item" type="primary">
      <el-button icon="el-icon-s-promotion" circle @click="isShow = !isShow"></el-button>
    </el-badge>
    <div id="replyMain" v-show="isShow">
      <div id="replyContent">
        <div id="otherUserReply"  v-for="userReply in userReplyList" :key="userReply.userReplyID">
          <otherReplyItem :userReply = userReply></otherReplyItem>
        </div>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div id="replyInput">
        <replyInput :postReplyID=postReplyID></replyInput>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js'
import replyInput from "./replyInput";
import otherReplyItem from './otherReplyItem';
export default {
  components: { replyInput,otherReplyItem },
  data() {
    return {
      number: '?',
      isShow: false,
      userReplyList:{}
    };
  },
  props:['postReplyID'],
  mounted(){
    axios.get(`http://localhost:8080/user/userReply/selectUserReplyCount/${this.postReplyID}`).then(
      (response) => {
        this.number = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(`http://localhost:8080/user/userReply/selectAllUserReply/${this.postReplyID}`).then(
      (response) => {
        this.userReplyList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    pubsub.subscribe('updateUserReply',() => {
      axios.get(`http://localhost:8080/user/userReply/selectUserReplyCount/${this.postReplyID}`).then(
        (response) => {
          this.number = response.data
        },
        (error) => {
          console.log(error)
        }
      )
      axios.get(`http://localhost:8080/user/userReply/selectAllUserReply/${this.postReplyID}`).then(
        (response) => {
          this.userReplyList = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }
};
</script>

<style scoped>
#replyMain {
  display: flex;
  height: 180px;
  border: 1px black dashed;
  border-radius: 10px;
}
#replyContent {
  width: 80%;
  padding: 0;
}
#otherUserReply {
  margin-left: 5px;
  margin-top: 10px;
}
#replyInput {
  width: 50%;
}
.el-badge {
  float: right;
  bottom: 40px;
}
.el-divider{
  height: 100%;
}
</style>