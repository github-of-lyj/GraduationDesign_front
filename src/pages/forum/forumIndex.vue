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
import hotCollege from "../../components/Forum/ForumContent/ForumIndex/HotCollege/hotCollege";
import hotPost from "../../components/Forum/ForumContent/ForumIndex/HotPost/hotPost";
import latestReply from "../../components/Forum/ForumContent/ForumIndex/LatestReply/latestReply";
import forumBlock from "../../components/Forum/ForumContent/ForumIndex/ForumBlock/forumBlock";
export default {
  components: { hotCollege, hotPost, latestReply, forumBlock },
};
</script>

<style>
#indexHead{
    display: flex;
}
</style>