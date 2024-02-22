<template>
  <div id="collegeNewsList">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">{{ title }}</span>
        <div>
          <collegeNewsDetail
            v-show="!errMsg"
            v-for="(collegeNews, index) in CollegeNewsList.slice(curPage*pageSize, curPage*pageSize + pageSize)"
            :key="index"
            :collegeNews="collegeNews"
          >
          </collegeNewsDetail>
        </div>
        <h3 v-show="errMsg">{{errMsg}}</h3>
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
import pubsub from "pubsub-js";
import collegeNewsDetail from "../detail/collegeNewsDetail.vue";
export default {
  data() {
    return {
      CollegeNewsList: [],
      title: "院校政策",
      pageSize: 5,
      curPage: 0,
      length,
    };
  },
  props:['errMsg'],
  methods:{
    pageChange(page){
      this.curPage = page - 1
    }
  },
  components: { collegeNewsDetail },
  mounted() {
    pubsub.subscribe("universityData", (msgName, CollegeNewsList) => {
      this.CollegeNewsList = CollegeNewsList;
      this.length = CollegeNewsList.length;
    });
  },
  beforeDestroy(){   
    pubsub.unsubscribe("universityData")
  }
};
</script>

<style scoped>
#collegeNewsList {
  width: 100%;
}
.el-tabs {
  width: 700px;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
}
.el-icon-more {
  margin-left: 45%;
  font-size: 30px;
  color: #409eff;
}
.fontClass {
  font-size: 20px;
}
.el-pagination{
  display: flex;
  justify-content: center;
}
</style>