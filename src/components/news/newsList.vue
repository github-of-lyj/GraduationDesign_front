<template>
  <div id="newsList">
    <el-tabs>
      <el-tab-pane :label="title">
        <div>
            {{title}}
        </div>
      </el-tab-pane>
      <a href=""><i class="el-icon-more"></i></a>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "xxx",
    };
  },
};
</script>

<style>
#tab-0{
    font-size: 50px;
}
.el-tabs{
    width: 30%;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
}
.el-icon-more{
    margin-left: 45%;
    font-size: 30px;
}

</style>