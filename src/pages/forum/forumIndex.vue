<template>
  <div>
    <div id="indexHead">
      <hotPost></hotPost>
      <latestReply></latestReply>
    </div>
    <forumBlock></forumBlock>
  </div>
</template>

<script>
import hotPost from "../../components/Forum/ForumContent/ForumIndex/HotPost/hotPost";
import latestReply from "../../components/Forum/ForumContent/ForumIndex/LatestReply/latestReply";
import forumBlock from "../../components/Forum/ForumContent/ForumIndex/ForumBlock/forumBlock";
export default {
  components: {hotPost, latestReply, forumBlock },
};
</script>

<style>
#indexHead{
    display: flex;
}
</style>