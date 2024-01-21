<template>
  <div>
    <pageHeader></pageHeader>
    <currentNews></currentNews>
  </div>
</template>

<script>
import pageHeader from "./components/header/pageHeader.vue";
import currentNews from "./components/news/currentNews.vue";
export default {
  name: "App",
  components: { pageHeader, currentNews },
};
</script>

<style>

</style>
