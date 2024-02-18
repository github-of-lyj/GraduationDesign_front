<template>
  <div id="currentUserPostItem">
    <div id="news">
      <div style="display: flex; align-items: center">
        <router-link
          id="nameRouter"
          class="hvr-shrink"
          :to="{
            name: 'ForumBlockPost',
            params: {
              postid: PostSearch.postID,
            },
          }"
          >{{PostSearch.postTitle}}</router-link
        >
        <p id="postContent">{{PostSearch.postReplyContent}}</p>
      </div>
      <div style="display: flex; align-items: center">
        <el-badge :value="PostSearch.replyNumber" class="item" type="primary">
          <div class="el-icon-s-comment"></div>
        </el-badge>
        <p id="time">{{PostSearch.postDate}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['PostSearch']
};
</script>

<style scoped>
#currentUserPostItem {
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
  font-size: 15px;
  width: 150px;
}
#postContent {
  font-size: 14px;
  margin-left: 10px;
  width: 500px;
  overflow-wrap: break-word;
}
.el-badge {
  font-size: 25px;
  margin-right: 30px;
}
</style>