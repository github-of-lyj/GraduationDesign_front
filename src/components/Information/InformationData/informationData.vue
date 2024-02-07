<template>
  <div>
    <div id="upload">
      <el-upload
        class="upload-demo"
        action="http://localhost:8080/information/upload"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
    <img src="http://localhost:8080/virImgs/2024/1/6/19/1707218550.jpg"> 
    <div id="informationData">
      <div>
        <tr>
          <th id="type">类别</th>
          <th id="name">名称</th>
          <th id="link">链接</th>
          <th id="size">
            大小<i class="el-icon-d-caret" @click="sortBySize"></i>
          </th>
          <th id="date">
            日期<i class="el-icon-d-caret" @click="sortByDate"></i>
          </th>
          <th id="download">
            下载量<i class="el-icon-d-caret" @click="sortByDownload"></i>
          </th>
        </tr>
        <tbody>
          <tr class="default">
            <td id="type">类别</td>
            <td id="name">名称</td>
            <td id="link">链接</td>
            <td id="size">大小</td>
            <td id="date">日期</td>
            <td id="download">下载量</td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sortBySize() {
      console.log("按照 size 排序");
    },
    sortByDate() {
      console.log("按照 date 排序");
    },
    sortByDownload() {
      console.log("按照 download 排序");
    },
  },
};
</script>

<style scoped>
#upload{
  margin:15px
}
#informationData {
  display: flex;
  margin: 15px;
}
#type {
  width: 50px;
  text-align: center;
}
#name {
  width: 300px;
  display: flex;
}
#link {
  width: 70px;
  text-align: center;
}
#size {
  width: 100px;
  text-align: center;
}
#date {
  width: 140px;
  text-align: center;
}
#download {
  width: 75px;
  text-align: center;
}
.default {
  background-color: #f9f9f9;
}
.default:hover {
  background-color: #f5f5f5;
}
th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}
i:hover {
  cursor: pointer;
}
</style>