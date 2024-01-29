<template>
  <div id="newsList">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">{{ type }}</span>
        <div>
          <currentNewsDetail
            v-for="(news, index) in newsList.slice(
              curPage * pageSize,
              curPage * pageSize + pageSize
            )"
            :key="index"
            :currentNews="news"
          >
          </currentNewsDetail>
        </div>
      </el-tab-pane>
      <el-pagination
        small
        layout="prev, pager, next , jumper"
        :total="length"
        :page-size="pageSize"
        @current-change="pageChange"
      >
      </el-pagination>
    </el-tabs>
  </div>
</template>

<script>
import currentNewsDetail from "../detail/currentNewsDetail.vue";
import axios from "axios";
export default {
  data() {
    return {
      newsList: [],
      errMsg: "",
      pageSize: 5,
      curPage: 0,
      length,
    };
  },
  props:['type'],
  methods: {
    pageChange(page) {
      console.log("@");
      this.curPage = page - 1;
    },
  },
  components: { currentNewsDetail },
  mounted() {
    axios.get(`http://localhost:8080/user/country/${this.type}/0`).then(
      (response) => {
        this.newsList = response.data;
        this.length = response.data.length;
      },
      (error) => {
        this.errMsg = error.message;
      }
    );
  },
};
</script>
<style scoped>
#newsList {
  width: 33%;
}
.el-tabs {
  width: 90%;
  height: 100%;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}
.fontClass {
  font-size: 20px;
}
.el-pagination{
  display: flex;
  justify-content: center;
}
</style>