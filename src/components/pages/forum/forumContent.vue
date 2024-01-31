<template>
  <div>
    <searchBox></searchBox>
    <router-view></router-view>
  </div>
</template>

<script>
import searchBox from "../../Forum/ForumHeader/searchBox.vue";

export default {
  components: { searchBox},
};
</script>

<style>
</style>