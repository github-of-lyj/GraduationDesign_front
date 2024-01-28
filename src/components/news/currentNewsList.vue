<template>
  <div id="newsList">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">{{type}}</span>
        <div>
          <currentNewsDetail
          v-for="(news,index) in newsList" :key="index"
          :currentNews="news"
          >
          </currentNewsDetail>  
        </div>
      </el-tab-pane>
      <a href=""><i class="el-icon-more"></i></a>
    </el-tabs>
  </div>
</template>

<script>
import currentNewsDetail from '../detail/currentNewsDetail.vue'
import axios from 'axios'
export default {
  data() {
    return {
      newsList: [],
      errMsg: ""
    };
  },
  props:['type'],
  components:{currentNewsDetail},
  mounted(){
    axios.get(`http://localhost:8080/user/country/${this.type}/5`).then(
      response => {
        this.newsList = response.data
      },
      error => {
        this.errMsg = error.message
      }
    )
  }
};
</script>
<style scoped>
#newsList{
  width: 33%;
}
.el-tabs{
    width: 90%;
    height: 100%;
    float: left;
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