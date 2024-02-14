<template>
  <div>
    <div id="upload">
      <el-upload
        class="avatar-uploader"
        :action="`http://localhost:8080/user/file/uploadUserAvatar?userID=${userID}`"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
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
  data() {
    return {
      imageUrl: "",
      userID: 2,
    };
  },
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

    handleAvatarSuccess(res, file) {
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      this.imageUrl = URL.createObjectURL(file);
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      return false;
    },
  },
};
</script>

<style scoped>
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

#upload {
  margin: 15px;
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