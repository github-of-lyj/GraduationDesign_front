<template>
  <div>
    <div id="upload">
      <el-upload
        class="upload-demo"
        action="http://localhost:8080/user/uploadfile/upload?userID=1"
        :before-upload="beforeFileUpload"
        :on-success="onFileUploadSuccess"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传zip文件，且不超过400MB
        </div>
      </el-upload>
    </div>
    <div id="informationData">
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
          <tr class="default" v-for="UploadFile in UploadFileList" :key="UploadFile.uploadfileID">
            <td id="name">{{getFileName(UploadFile.uploadfileName)}}.zip</td>
            <td id="size">{{UploadFile.uploadfileSize}}KB</td>
            <th id="name">
              <router-link
                :to="{
                  name: 'User',
                  params: {
                    userid: UploadFile.userID,
                },
              }"
              >
                {{UploadFile.userName}}
              </router-link>
            </th>
            <td id="date">{{UploadFile.uploadDate}}</td>
            <td id="link"><span class="el-icon-download" style="cursor: pointer;color:red;" @click="download"></span></td>
            <td id="download">{{UploadFile.downloadCounts}}</td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      UploadFileList:[]
    };
  },
  methods: {
    sortBySize() {
      this.UploadFileList.sort((a,b)=>{
        return parseInt(b.uploadfileSize) - parseInt(a.uploadfileSize)
      })
      this.$message({
        message: '按照文件大小从大到小排列',
        type: 'info'
      })
    },
    sortByDate() {
      this.UploadFileList.sort((a,b)=>{
        const dateA = new Date(a.uploadDate);
        const dateB = new Date(b.uploadDate);
        return dateB - dateA
      })
      this.$message({
        message: '按照日期从晚到早排列',
        type: 'info'
      })
    },
    sortByDownload() {
      this.UploadFileList.sort((a,b)=>{
        return b.downloadCounts - a.downloadCounts
      })
      this.$message({
        message: '按照下载量从高到低排序',
        type: 'info'
      })
    },
    getFileName(fileName){
      const separatorIndex = fileName.indexOf("-")
      return fileName.substring(0, separatorIndex)
    },
    beforeFileUpload(file) {
      const isZip = file.type === "application/x-zip-compressed";

      if (!isZip) {
        this.$message.error("上传文件只能是zip格式!");
      }
      return isZip
    },
    onFileUploadSuccess(){
      pubsub.publish('getUploadFile')
    },
    download(){
      console.log('开始下载')
    }
  },
  mounted(){
    pubsub.subscribe('getUploadFile',() => {
      axios.get('http://localhost:8080/user/uploadfile/selectAllUploadFile').then(
        (response) => {
          this.UploadFileList = response.data
        },
        (error) => {
          console.log(error)
        }
      )
    })
    pubsub.publish('getUploadFile')
  }
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