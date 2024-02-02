<template>
  <div id="information">
    <div id="forumBlockTitle">
      <router-link
        :to="{
          name: 'ForumBlockPage',
          pararms: {
            blockid: 1,
          },
        }"
        id="forumBlockName"
        >forumBlockName
      </router-link>
    </div>
    <div id="forumBlockData">
      <div>
        <p>关注:xxx</p>
        <p>帖子:xxx</p>
      </div>
      <el-button>关注</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#information {
  padding: 20px;
}
#forumBlockTitle {
  display: flex;
}
#forumBlockName {
  font-size: 22px;
}
#forumBlockData {
  display: flex;
  font-size: 12px;
  color: #aaa;
  justify-content: space-between;
}
p {
  margin: 0;
  font-size: 14px;
}
</style>