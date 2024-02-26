<template>
  <div id="search">
    <img id="logo" src="../../assets/feather.png" />
    <div id="searchBox">
      <el-autocomplete
        class="inline-input"
        v-model="inputWords"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
      ></el-autocomplete>
      <el-button type="primary" @click="startSearch">搜索</el-button>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      inputWords: "",
    };
  },
  methods: {
    querySearch(inputWords, callback) {
      callback([{ value: "用户" }, { value: "帖子" }, { value: "用户发言" }]);
    },
    startSearch() {
      var pos = this.$route.path.slice(1).indexOf("/") + 2;
      var str = this.$route.path.slice(pos);
      if(str === 'user'){
        pubsub.publish('getUserByIF',this.inputWords)
      }
      if(str === 'post'){
        pubsub.publish('getPostByIF',this.inputWords)
      }
      if(str === 'postReply'){
        pubsub.publish('getPostReplyByIF',this.inputWords)
      }
      if(str === 'userReply'){
        pubsub.publish('getUserReplyByIF',this.inputWords)
      }
    },
  },
};
</script>

<style scoped>
#search {
  display: flex;
  margin: 15px;
  justify-content: center;
}
#searchBox {
  display: flex;
  align-items: center;
}
img {
  height: 60px;
  margin-right: 5px;
}
.el-autocomplete {
  font-size: 20px;
  width: 600px;
}
.el-input {
  display: flex;
  align-items: center;
}
.el-select {
  margin-right: 20px;
  width: 75px;
}
</style>