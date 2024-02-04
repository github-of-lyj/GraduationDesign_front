<template>
  <div id="postResult">
    <router-link
      id="postTitle"
      :to="{
        name: 'ForumBlockPost',
        params: {
          postid: 2,
        },
      }"
      >postTitle</router-link
    >
    <div id="postContent">这里是postContent的内容</div>
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
#postResult{
  padding: 10px;
}
#postTitle {
  font-size: 18px;
}
#postContent {
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