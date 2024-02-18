<template>
  <div id="userReplyItem">
    <div id="news">
      <div style="display: flex;align-items: center;">
        <router-link
          id="nameRouter"
          class="hvr-shrink"
          :to="{
            name: 'ForumBlockPost',
            params: {
              postid: searchPostReply.postID,
            },
          }"
          >{{searchPostReply.postTitle}}</router-link
        >
        <p id="postContent">{{searchPostReply.postReplyContent}}</p>
      </div>
      <p id="time">{{searchPostReply.postReplyTime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['searchPostReply']
};
</script>

<style scoped>
#userReplyItem {
  margin-top: 5px;
  margin-bottom: 5px;
}
#news {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#time {
  float: right;
  font-size: 15px;
}
#nameRouter {
  text-decoration: none;
  color: black;
  font-size: 17px;
  width: 200px;
}
#postContent {
  font-size: 15px;
  margin-left: 10px;
  width: 500px;
  overflow-wrap: break-word;
}
</style>