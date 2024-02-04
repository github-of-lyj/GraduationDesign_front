<template>
  <div id="postSearch">
    <div class="divider"></div>
    <div>
      <div id="postResult">
        <router-link id="postTitle" :to="{
          name: 'ForumBlockPost',
          params:{
            postid:2
          }
        }">postTitle</router-link>
        <div id="postContent">这里是postContent的内容</div>
        <span id="blockName">板块名称:<router-link :to="{
          name: 'ForumBlockPage',
          params:{
            blockid:1
          }
        }">blockname</router-link></span>
        <span id="author">作者:<router-link :to="{
          name: 'User',
          params: {
            userid: 3
          }
        }">authorname</router-link></span>
        <span id="time">时间</span>
      </div>
    </div>
    <div class="divider"></div>
    <div>
      <div id="replyReult">
        <span id="postTitle">回复:<router-link id="postTitle" :to="{
          name: 'ForumBlockPost',
          params:{
            postid:2
          }
        }">postTitle</router-link></span>
        <div id="replyContent">这里是 replyContent 的内容</div>
        <span id="blockName">板块名称:<router-link :to="{
          name: 'ForumBlockPage',
          params:{
            blockid:1
          }
        }">blockname</router-link></span>
        <span id="author">作者:<router-link :to="{
          name: 'User',
          params: {
            userid: 3
          }
        }">authorname</router-link></span>
        <span id="time">时间</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#postSearch {
  justify-content: center;
  display: flex;
  margin: 15px;
}
#postResult,
#replyReult {
  padding: 10px;
}
#postTitle {
  font-size: 18px;
}
#postContent,
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
.divider {
  background-color: #DCDFE6;
  display: inline-block;
  width: 1px;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>