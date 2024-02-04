<template>
  <div>
    <postHeader></postHeader>
    <div id="forumBlockPost">
      <userData></userData>
      <replyContent></replyContent>
    </div>
    <div id="forumBlockPost">
      <userData></userData>
      <replyContent></replyContent>
    </div>
    <forumBlockPostInput></forumBlockPostInput>

  </div>
</template>

<script>
import postHeader from "../../components/Forum/ForumContent/ForumBlockPost/postHeader";
import userData from "../../components/Forum/ForumContent/ForumBlockPost/userData";
import replyContent from "../../components/Forum/ForumContent/ForumBlockPost/replyContent";
import forumBlockPostInput from "../../components/Forum/ForumContent/ForumBlockPost/forumBlockPostInput";
export default {
  components: { userData, replyContent, postHeader , forumBlockPostInput},
};
</script>

<style>
#forumBlockPost {
  display: flex;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 5px;
  border: 1px #e5e5e5 solid;
}
</style>