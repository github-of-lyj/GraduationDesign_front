<template>
  <div>
    <forumHeader initialInputWords="" pos=-1></forumHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import forumHeader from "../../Forum/ForumHeader/forumHeader";

export default {
  components: { forumHeader},
};
</script>

<style>
</style>