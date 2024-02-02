<template>
  <div id="forumBlockPage">
    <forumBlockSide></forumBlockSide>
    <div id="demo">
      <forumBlockHeader></forumBlockHeader>
      <forumBlockPostItem></forumBlockPostItem>
    </div>
  </div>
</template>

<script>
import forumBlockSide from "../../Forum/ForumContent/ForumBlockPage/forumBlockSide";
import forumBlockHeader from "../../Forum/ForumContent/ForumBlockPage/forumBlockHeader";
import forumBlockPostItem from "../../Forum/ForumContent/ForumBlockPage/forumBlockPostItem";
export default {
  components: { forumBlockSide, forumBlockHeader, forumBlockPostItem },
};
</script>

<style>
#forumBlockPage {
  display: flex;
}
#demo {
  padding-left: 60px;
  padding-top: 20px;
}
</style>