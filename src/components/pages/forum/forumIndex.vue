<template>
  <div>
    <div id="indexHead">
      <hotCollege></hotCollege>
      <hotPost></hotPost>
      <latestReply></latestReply>
    </div>
    <forumBlock></forumBlock>
  </div>
</template>

<script>
import hotCollege from "../../Forum/ForumContent/ForumIndex/hotCollege";
import hotPost from "../../Forum/ForumContent/ForumIndex/hotPost";
import latestReply from "../../Forum/ForumContent/ForumIndex/latestReply";
import forumBlock from "../../Forum/ForumContent/ForumIndex/forumBlock";
export default {
  components: { hotCollege, hotPost, latestReply, forumBlock },
};
</script>

<style>
#indexHead{
    display: flex;
}
</style>