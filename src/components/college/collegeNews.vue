<template>
  <div id="demo">
    <div id="colluagueNews">
      <div id="titleHead">
        <h3>
          直击院校——当前显示的是“{{ collegeName }}”
          <router-link to="/">></router-link>
        </h3>
        <h3 v-show="errMsg">{{errMsg}}</h3>
        <collegeNewsList></collegeNewsList>
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
import pubsub from 'pubsub-js'
import axios from "axios";
import collegeNewsList from "./collegeNewsList.vue";
import postList from "../post/postList.vue";
export default {
  data() {
    return {
      collegeName: "",
      errMsg: "",
    };
  },
  components: { collegeNewsList, postList },
  mounted() {
    axios.get("http://localhost:8080/user/college/random").then(
      (response) => {
        this.collegeName = response.data.collegeName;
        axios
          .get(`http://localhost:8080/user/university/${response.data.collegeCode}/5`)
          .then(
            (response) => {
              pubsub.publish('universityData',response.data)
            },
            (error) => {
              this.errMsg = error.message
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style scoped>
#demo {
  margin: 15px;
}
#colluagueNews {
  display: flex;
  height: max-content
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

.el-divider--vertical {
  margin-top: 15px;
  height: 90%;
}
</style>