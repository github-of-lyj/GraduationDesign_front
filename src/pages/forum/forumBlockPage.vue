<template>
  <div>
    <div id="forumBlockPage">
      <forumBlockSide></forumBlockSide>
      <div id="demo">
        <forumBlockHeader></forumBlockHeader>
        <forumBlockPostItem></forumBlockPostItem>
        <forumBlockInput></forumBlockInput>
      </div>
    </div>
  </div>
</template>

<script>
import forumBlockSide from "../../components/Forum/ForumContent/ForumBlockPage/forumBlockSide";
import forumBlockHeader from "../../components/Forum/ForumContent/ForumBlockPage/forumBlockHeader";
import forumBlockPostItem from "../../components/Forum/ForumContent/ForumBlockPage/forumBlockPostItem";
import forumBlockInput from "../../components/Forum/ForumContent/ForumBlockPage/forumBlockInput"
export default {
  components: { forumBlockSide, forumBlockHeader, forumBlockPostItem , forumBlockInput},
};
</script>

<style scoped>
#forumBlockPage {
  display: flex;
  margin-bottom: 20px;
}
#demo {
  padding-left: 60px;
  padding-top: 20px;
}
</style>