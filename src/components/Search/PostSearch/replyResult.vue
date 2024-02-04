<template>
  <div id="replyReult">
    <span id="postTitle"
      >回复:<router-link
        id="postTitle"
        :to="{
          name: 'ForumBlockPost',
          params: {
            postid: 2,
          },
        }"
        >postTitle</router-link
      ></span
    >
    <div id="replyContent">这里是 replyContent 的内容</div>
    <span id="blockName"
      >板块名称:<router-link
        :to="{
          name: 'ForumBlockPage',
          params: {
            blockid: 1,
          },
        }"
        >blockname</router-link
      ></span
    >
    <span id="author"
      >作者:<router-link
        :to="{
          name: 'User',
          params: {
            userid: 3,
          },
        }"
        >authorname</router-link
      ></span
    >
    <span id="time">时间</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#replyReult {
  padding: 10px;
}
#postTitle {
  font-size: 18px;
}
#replyContent {
  font-size: 13px;
  line-height: 150%;
  width: 40em;
  word-wrap: break-word;
}
#blockName,
#author,
#time {
  font-size: 13px;
}
#blockName {
  margin-right: 8px;
}
#time {
  margin-left: 15px;
}
</style>