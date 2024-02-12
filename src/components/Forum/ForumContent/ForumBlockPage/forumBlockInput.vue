<template>
  <div id="forumBlockInput">
    <div id="behavior">
      <p id="picture" class="el-icon-chat-line-square">发表新帖</p>
    </div>
    <el-input v-model="title" placeholder="请填写标题"></el-input>
    <div id="behavior">
      <a id="picture" class="el-icon-picture">图片</a>
      <a id="stick" class="el-icon-magic-stick">表情</a>
    </div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      resize="none"
      v-model="inputWords"
      :rows="5"
      maxlength="100"
      show-word-limit
    >
    </el-input>
    <div id="replyButton">
      <el-button type="primary" plain>发表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      inputWords: '',
    };
  },
};
</script>

<style scoped>
#forumBlockInput {
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}
#behavior {
  padding-top: 10px;
  padding-bottom: 10px;
}
#picture {
  margin-right: 10px;
}
#replyButton {
  padding: 10px;
  padding-left: 0;
}
</style>