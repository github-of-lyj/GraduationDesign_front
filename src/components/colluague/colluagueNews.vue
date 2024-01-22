<template>
  <div id="demo">
    <div id="colluagueNews">
      <div id="titleHead">
        <h2>
          直击院校——当前显示的是{{ schoolName }}
          <router-link to="/">></router-link>
        </h2>
        <newsList></newsList>
      </div>
      <div id="contentList">
        <postList></postList>
        <el-divider direction="vertical"></el-divider>
        <postList></postList>
      </div>
    </div>
  </div>
</template>

<script>
import newsList from "../news/newsList.vue";
import postList from "./postList.vue";
export default {
  data() {
    return {
      schoolName: "xxx",
    };
  },
  components: { newsList, postList},
};
</script>

<style scoped>
#demo {
  margin: 15px;
}
#colluagueNews {
  display: flex;
}
#titleHead {
  align-items: center;
  width: 33%;
}
#contentList {
  display: flex;
  width: 66%;
  border: 1px solid;
  border-radius: 20px;
}
#newsList {
  width: 100%;
}
.el-icon-arrow-right {
  margin-left: 20px;
  font-size: 30px;
}

.el-divider--vertical{
  margin-top: 15px;
  height: 90%;
}
</style>