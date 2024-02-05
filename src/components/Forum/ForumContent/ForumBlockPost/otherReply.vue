<template>
  <div id="otherReply">
    <el-badge :value="number" class="item" type="primary">
      <el-button icon="el-icon-s-promotion" circle @click="isShow = !isShow"></el-button>
    </el-badge>
    <div id="replyMain" v-show="isShow">
      <div id="replyContent">
        <div id="otherUserReply">
          <div style="display: flex; align-items: center">
            <router-link
              id="nameRouter"
              :to="{
                name: 'User',
                params: {
                  userid: 3,
                },
              }"
              >userName：</router-link
            >
            <p id="postContent">postContentpostContentpostContentpostContent</p>
          </div>
          <p id="time">data</p>
        </div>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div id="replyInput">
        <replyInput></replyInput>
      </div>
    </div>
  </div>
</template>

<script>
import replyInput from "./replyInput";
export default {
  components: { replyInput },
  data() {
    return {
      number: 1,
      isShow: false
    };
  },
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
  width: 50%;
  padding: 0;
}
#otherUserReply {
  justify-content: space-between;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
}
#nameRouter {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
#postContent {
  width: 200px;
  font-size: 12px;
  margin-left: 10px;
  overflow-wrap: break-word;
}
#time {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-right: 20px;
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