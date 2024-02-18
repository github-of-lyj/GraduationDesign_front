<template>
  <div id="left">
    <div>
      <div id="titleName">
        <div id="titleTheme">
          <span>回复数：{{hotPost.replyNumber}}</span>
        </div>
        <div id="postName">
          <router-link :to="{
            name: 'ForumBlockPost',
            params:{
              postid: hotPost.postID
            }
          }">{{hotPost.postTitle}}</router-link> 
        </div>
      </div>
      <div id="postContent">
        <div id="themeContent">{{hotPost.postReplyContent}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['hotPost']
};
</script>

<style>
#left {
  display: flex;
  align-items: center;
}
#titleTheme {
  font-size: 20px;
}
#postName {
  font-size: 15px;
}
#themeContent {
  font-size: 12px;
  color: #666;
}
a {
  text-decoration: none;
}
</style>