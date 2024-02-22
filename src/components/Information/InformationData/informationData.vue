<template>
  <div>
    <div v-if="!UploadFileList.length" id="NoResultHandle">
      <p>似乎没有符合条件的结果呢 (°ー°〃)</p>
    </div>
    <div id="upload">
      <el-upload
        v-if="userData.userID"
        class="upload-demo"
        :action="`http://localhost:8080/user/uploadfile/upload?userID=${userData.userID}`"
        :before-upload="beforeFileUpload"
        :on-success="onFileUploadSuccess"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传zip文件，且不超过400MB
        </div>
      </el-upload>
    </div>
    <div id="informationData" v-if="UploadFileList.length">
      <div>
        <tr>
          <th id="name">名称</th>
          <th id="size">
            大小<i class="el-icon-d-caret" @click="sortBySize"></i>
          </th>
          <th id="name">上传用户</th>
          <th id="date">
            日期<i class="el-icon-d-caret" @click="sortByDate"></i>
          </th>
          <th id="link">下载</th>
          <th id="download">
            下载量<i class="el-icon-d-caret" @click="sortByDownload"></i>
          </th>
        </tr>
        <tbody>
          <tr
            class="default"
            v-for="uploadFile in UploadFileList"
            :key="uploadFile.uploadfileID"
          >
            <td id="name">{{ getFileName(uploadFile.uploadfileName) }}.zip</td>
            <td id="size">{{ uploadFile.uploadfileSize }}KB</td>
            <th id="name">
              <router-link
                :to="{
                  name: 'User',
                  params: {
                    userid: uploadFile.userID,
                  },
                }"
              >
                {{ uploadFile.userName }}
              </router-link>
            </th>
            <td id="date">{{ uploadFile.uploadDate }}</td>
            <td id="link">
              <span
                class="el-icon-download"
                style="cursor: pointer; color: red"
                @click="download(uploadFile)"
              ></span>
            </td>
            <td id="download">{{ uploadFile.downloadCounts }}</td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      UploadFileList: [],
      userData: {},
    };
  },
  methods: {
    sortBySize() {
      this.UploadFileList.sort((a, b) => {
        return parseInt(b.uploadfileSize) - parseInt(a.uploadfileSize);
      });
      this.$message({
        message: "按照文件大小从大到小排列",
        type: "info",
      });
    },
    sortByDate() {
      this.UploadFileList.sort((a, b) => {
        const dateA = new Date(a.uploadDate);
        const dateB = new Date(b.uploadDate);
        return dateB - dateA;
      });
      this.$message({
        message: "按照日期从晚到早排列",
        type: "info",
      });
    },
    sortByDownload() {
      this.UploadFileList.sort((a, b) => {
        return b.downloadCounts - a.downloadCounts;
      });
      this.$message({
        message: "按照下载量从高到低排序",
        type: "info",
      });
    },
    getFileName(fileName) {
      const separatorIndex = fileName.indexOf("-");
      return fileName.substring(0, separatorIndex);
    }, 
    beforeFileUpload(file) {
        const isJPG = file.type === 'application/x-zip-compressed';
        const isLt2M = file.size / 1024 / 1024 < 400;
        if (!isJPG) {
          this.$message.error('上传文件只能是 zip 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 400MB!');
        }
        return isJPG && isLt2M;
    },
    onFileUploadSuccess() {
      pubsub.publish("getUploadFile");
    },
    download(uploadFile) {
      var userData = JSON.parse(localStorage.getItem("user"));
      if (userData != null) {
        axios.post("http://localhost:8080/user/checkLogin", userData).then(
          (response) => {
            if (response.data.description) {
              this.$message({
                message: response.data.description,
                type: "warning",
              });
              localStorage.removeItem("user");
              this.isLogin = false;
              this.userData = {};
              //无论该用户进行了什么操作，都默认回到首页，
              this.$router.push("/");
            } else {
              axios
                .post(
                  "http://localhost:8080/user/uploadfile/getFile",
                  uploadFile,
                  {
                    responseType: "blob",
                  }
                )
                .then((response) => {
                  // 创建一个Blob对象
                  const blob = new Blob([response.data], {
                    type: response.headers["content-type"],
                  });
                  // 创建一个URL对象
                  const url = window.URL.createObjectURL(blob);
                  // 创建一个<a>标签
                  const link = document.createElement("a");
                  link.href = url;
                  // 设置下载文件的文件名
                  link.setAttribute(
                    "download",
                    this.getFileName(uploadFile.uploadfileName) + ".zip"
                  );
                  // 触发点击事件进行下载
                  document.body.appendChild(link);
                  link.click();
                  // 清理URL对象
                  window.URL.revokeObjectURL(url);
                  uploadFile.downloadCounts = uploadFile.downloadCounts + 1;
                })
                .catch((error) => {
                  console.error("Error downloading file:", error);
                });
            }
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.$message({
          message: "用户未登录",
          type: "info",
        });
      }
    },
  },
  mounted() {
    pubsub.subscribe("getUploadFile", () => {
      axios
        .get("http://localhost:8080/user/uploadfile/selectAllUploadFile")
        .then(
          (response) => {
            this.UploadFileList = response.data;
          },
          (error) => {
            console.log(error);
          }
        );
    });
    pubsub.subscribe("getSearchData", (MsgName, SearchField) => {
      axios
        .get(
          `http://localhost:8080/user/UploadFileSearch/selectVagueUploadFile/${SearchField}`
        )
        .then(
          (response) => {
            this.UploadFileList = response.data;
          },
          (error) => {
            console.log(error);
          }
        );
    });
    pubsub.publish("getUploadFile");
    var userData = JSON.parse(localStorage.getItem("user"));
    if (userData != null) this.userData = userData;
  },
};
</script>

<style scoped>
#NoResultHandle {
  margin-left: 200px;
  margin-right: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border: 1px black dotted;
  border-radius: 10px;
}
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
  text-align: center;
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
  width: 300px;
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