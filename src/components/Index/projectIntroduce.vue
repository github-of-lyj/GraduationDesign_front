<template>
  <div id="Index">
    <div id="context">
      <h2>欢迎来到我的毕业设计项目</h2>
      <el-carousel indicator-position="outside" type="card">
        <el-carousel-item v-for="(img, index) in imgs" :key="index">
          <img :src="img.src" />
        </el-carousel-item>
      </el-carousel>
      <div id="markdown-body">
        <h3>项目介绍</h3>
        <ul>
          <li>
            前端页面采用 Vue 框架，后端功能使用 SpringCloud 结合 SpringCloud
            Alibaba 编写构建微服务模块接口
          </li>
          <li>
            项目预期目标向用户最终提供一个集资讯获取，讨论交流，资源上传等功能于一体的考研交流平台
          </li>
        </ul>
      </div>
    </div>
    <div id="calendar">
      <el-calendar v-model="calendar"> </el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        { src: "/imgs/img1.jpg" },
        { src: "/imgs/img2.jpg" },
        { src: "/imgs/img3.jpg" },
      ],
      calendar: new Date(),
      activeNames: ["1"],
    };
  },
};
</script>

<style scoped>
#Index {
  display: flex;
  margin: 15px;
}
#context {
  width: 65%;
}
#calendar {
  width: 30%;
  margin-left: 4%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}
li {
  line-height: 3;
  font-weight: bold;
  font-size: 18px;
}
</style>