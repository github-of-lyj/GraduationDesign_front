<template>
  <div id="left">
    <div>
      <div id="titleName">
        <div id="postName">
          <router-link to="/forum/index">postName</router-link>
        </div>
      </div>
      <div id="postContent">
        <div id="themeContent">answerContent</div>
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