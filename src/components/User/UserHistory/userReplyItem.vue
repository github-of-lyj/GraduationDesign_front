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
              postid: 3,
            },
          }"
          >postName</router-link
        >
        <p id="postContent">userReplyContent</p>
      </div>
      <p id="time">date</p>
    </div>
  </div>
</template>

<script>
export default {};
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
  font-size: 18px;
}
#nameRouter {
  text-decoration: none;
  color: black;
  font-size: 17px;
  width: 150px;
}
#postContent {
  margin-left: 10px;
  width: 500px;
  overflow-wrap: break-word;
}
</style>