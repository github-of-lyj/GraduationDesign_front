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
import postHeader from "../../Forum/ForumContent/ForumBlockPost/postHeader";
import userData from "../../Forum/ForumContent/ForumBlockPost/userData";
import replyContent from "../../Forum/ForumContent/ForumBlockPost/replyContent";
import forumBlockPostInput from "../../Forum/ForumContent/ForumBlockPost/forumBlockPostInput";
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