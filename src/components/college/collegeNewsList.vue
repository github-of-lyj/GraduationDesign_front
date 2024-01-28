<template>
  <div id="collegeNewsList">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">{{title}}</span>
        <div>
          <collegeNewsDetail 
          v-for="(collegeNews,index) in CollegeNewsList" 
          :key="index"
          :collegeNews = "collegeNews"
          >
          </collegeNewsDetail>  
        </div>
      </el-tab-pane>
      <a href=""><i class="el-icon-more"></i></a>
    </el-tabs>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import collegeNewsDetail from '../detail/collegeNewsDetail.vue'
export default {
  data() {
    return {
      CollegeNewsList:[],
      title: "院校政策"
    };
  },
  components:{collegeNewsDetail},
  mounted(){
    pubsub.subscribe('universityData',(msgName,CollegeNewsList) => {
      this.CollegeNewsList = CollegeNewsList
    })
    
  }
};
</script>

<style scoped>
#collegeNewsList{
  width: 100%;
}
.el-tabs{
    width: 90%;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
}
.el-icon-more{
    margin-left: 45%;
    font-size: 30px;
    color: #409EFF;
}
.fontClass{
  font-size: 20px;
}
</style>