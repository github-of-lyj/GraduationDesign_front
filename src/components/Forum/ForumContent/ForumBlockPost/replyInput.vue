<template>
  <div id="demo">
    <div id="behavior">
      <a id="picture" class="el-icon-picture">图片</a>
      <a id="stick" class="el-icon-magic-stick">表情</a>
    </div>
    <el-input
      type="textarea"
      :rows="3"
      resize="none"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="100"
      show-word-limit
    >
    </el-input>
    <div id="replyButton">
      <el-button type="primary" plain>发表回复</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
    };
  },
};
</script>

<style scoped>
#demo{
    padding: 20px;
}
#behavior{
  margin-bottom: 5px;
}
#picture{
  margin-right: 10px;
}
#replyButton{
  padding: 10px;
  padding-left: 0;
}
</style>