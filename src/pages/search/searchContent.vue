<template>
  <div>
    <forumHeader :initialInputWords="$route.query.initialInputWords" pos=-2></forumHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import forumHeader from "../../components/Forum/ForumHeader/forumHeader";
export default {
  components: { forumHeader },
  mounted() {

    pubsub.subscribe("search", () => {
      // console.log('触发事件了')
      this.$router.push({
        name: this.$route.query.value,
        params: {
          searchname: this.$route.query.initialInputWords,
        },
      });
    });
  },
  beforeDestroy(){
    pubsub.unsubscribe("search")
  }
};
</script>

<style>
</style>