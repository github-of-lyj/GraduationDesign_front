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
        >{{blockInformation.blockName}}
      </router-link>
    </div>
    <div id="forumBlockData">
      <div style="padding-right: 10px;">
        <p>关注:{{blockInformation.followers}}</p>
        <p>帖子:{{blockInformation.postNumber}}</p>
      </div>
      <el-button>关注</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props:['blockInformation']
};
</script>

<style scoped>
#information {
  padding: 20px;
}
#forumBlockTitle {
  display: flex;
  padding-bottom: 10px;
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