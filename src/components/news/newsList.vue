<template>
  <div id="newsList">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">{{title}}</span>
        <div>
          <itemDetail></itemDetail>  
        </div>
      </el-tab-pane>
      <a href=""><i class="el-icon-more"></i></a>
    </el-tabs>
  </div>
</template>

<script>
import itemDetail from '../itemDetail.vue'
export default {
  data() {
    return {
      title: "xxx",
    };
  },
  components:{itemDetail}
};
</script>

<style scoped>
#newsList{
  height: 200px;
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
}
.fontClass{
  font-size: 50px;
}
</style>