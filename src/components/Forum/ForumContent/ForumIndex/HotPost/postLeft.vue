<template>
  <div id="left">
    <div>
      <div id="titleName">
        <div id="titleTheme">
          <router-link :to="{
            name: 'ForumBlockPost',
            params:{
              postid: 2
            }
          }">titleTheme</router-link>
        </div>
        <div id="postName">
          <router-link :to="{
            name: 'ForumBlockPost',
            params:{
              postid:2
            }
          }">postName</router-link>
        </div>
      </div>
      <div id="postContent">
        <div id="themeContent">themeContent</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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