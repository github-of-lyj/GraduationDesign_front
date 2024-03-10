<template>
  <div id="latestReply">
    <classHead
      classTitle="最新回复"
      :isPage="false"
      className="el-icon-chat-dot-square"
    ></classHead>
    <div id="replyItem">
      <ul>
        <li v-for="HotPostReply in HotPostReplyList" :key="HotPostReply.postReplyID">
          <replyLeft :HotPostReply = HotPostReply></replyLeft>
          <replyRight :HotPostReply = HotPostReply></replyRight>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import classHead from "../classHead";
import replyLeft from "./replyLeft"
import replyRight from "./replyRight"
export default {
  data() {
    return {
      HotPostReplyList: [],
    };
  },
  components: { classHead , replyLeft, replyRight},
  mounted(){
    axios.get('http://192.168.23.129/user/PostReplySearch/selectHotPostReply').then(
      (response) => {
        this.HotPostReplyList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#latestReply {
  width: 30%;
  margin: 15px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
  padding: 16px;
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