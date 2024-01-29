<template>
  <div>
    <pageHeader></pageHeader>
    <div id="homeContent">
      <router-view></router-view>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageHeader from "./components/header/pageHeader.vue";
import pageFooter from "./components/footer/pageFooter.vue"

export default {
  name: "App",
  components: { pageHeader , pageFooter },
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
