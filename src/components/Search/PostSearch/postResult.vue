<template>
  <div id="postResult">
    <router-link
      id="postTitle"
      :to="{
        name: 'ForumBlockPost',
        params: {
          postid: post.postID,
        },
      }"
      >{{post.postTitle}}</router-link
    >
    <div id="postContent">{{post.postReplyContent}}</div>
    <span id="blockName"
      >板块名称:<router-link
        :to="{
          name: 'ForumBlockPage',
          params: {
            blockid: post.blockID,
          },
        }"
        >{{post.blockName}}</router-link
      ></span
    >
    <span id="author"
      >作者:<router-link
        :to="{
          name: 'User',
          params: {
            userid: post.userID,
          },
        }"
        >{{post.userName}}</router-link
      ></span
    >
    <span id="time">{{post.postDate}}</span>
  </div>
</template>

<script>
export default {
  props:['post']
};
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