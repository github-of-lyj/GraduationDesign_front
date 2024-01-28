<template>
  <div>
    <pageHeader></pageHeader>
    <div id="homeContent">
      <currentNews></currentNews>
      <el-divider></el-divider>
      <colluagueNews></colluagueNews>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageHeader from "./components/header/pageHeader.vue";
import currentNews from "./components/news/currentNews.vue";
import colluagueNews from "./components/college/collegeNews.vue";
import pageFooter from "./components/footer/pageFooter.vue"

export default {
  name: "App",
  components: { pageHeader, currentNews, colluagueNews , pageFooter },
};
</script>

<style scoped>
#homeContent{
  border: 2px solid;
  border-radius: 10px;
}
.el-divider--horizontal{
  width: 95%;
  margin-left: 2.5%;
}

</style>
