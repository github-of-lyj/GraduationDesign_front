<template>
  <div id="left">
    <div id="replyNumber" class="el-icon-message">129</div>
    <div id="postTitle_Content">
      <router-link
        :to="{
          name: 'ForumBlockPost',
          params: {
            postid: 2,
          },
        }"
        id="postTitle"
        >postTitle</router-link>
      <p id="content">postTitle_Content</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#left {
  display: flex;
  padding: 20px;
}
#replyNumber {
  display: flex;
  align-items: center;
  font-size: 15px;
}
#postTitle_Content {
  display: flex;
  margin-left: 50px;
}
#postTitle {
  font-size: 20px;
}
#content {
  font-size: 15px;
  margin-left: 50px;
}
#left div {
  padding: 10px;
}
p{
  margin: 0;
}
</style>