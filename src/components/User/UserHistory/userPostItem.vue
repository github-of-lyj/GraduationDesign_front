<template>
  <div id="userPostItem">
    <div id="news">
      <div style="display: flex;align-items: center;">
        <router-link
          id="nameRouter"
          class="hvr-shrink"
          :to="{
            name: 'ForumBlockPost',
            params: {
              postid: searchPost.postID,
            },
          }"
          >{{searchPost.postTitle}}</router-link
        >
        <p id="postContent">{{searchPost.postReplyContent}}</p>

      </div>
      <p id="time">{{searchPost.postDate}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['searchPost']
};
</script>

<style scoped>
#userPostItem {
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