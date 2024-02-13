<template>
  <div id="currentUserInformation">
    <div>
      <div id="userName">
        <span>{{ userData.userName }}</span>
      </div>
      <img
        :src="`http://localhost:8080/user/file/getUserAvatar/${userData.userAvatar}`"
        id="userIcon"
      />
      <div style="text-align: center">
        <el-tooltip
          class="item"
          effect="dark"
          content="返回"
          placement="bottom-start"
        >
          <el-button
            type="primary"
            icon="el-icon-back"
            size="mini"
            @click="goBack"
          ></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="编辑" placement="bottom-start">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogFormVisible = true"></el-button>
        </el-tooltip>
        <el-dialog title="修改个人信息（为空表示不修改）" :visible.sync="dialogFormVisible" :center="false" @closed="aa">
          <el-form :model="form">
            <el-form-item label="用户头像" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:8080/user/file/uploadUserAvatar"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="用户姓名" :label-width="formLabelWidth">
              <el-input v-model="form.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户简介" :label-width="formLabelWidth">
              <el-input v-model="form.userDescription" autocomplete="off" type="textarea" resize="none" rows="4"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false;isEdit = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;isEdit = true">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <div id="userData">
      <div>
        <span id="level">用户等级:{{ userData.userLevel }}</span>
        <span id="experience">用户经验:{{ userData.userExperience }}</span>
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="getPercent()"
        ></el-progress>
      </div>
      <p style="margin-bottom: 5px">用户简介：</p>
      <el-input
        type="textarea"
        rows="4"
        maxlength="50"
        v-model="userData.userDescription"
        resize="none"
        :disabled="true"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      userData: {},
      dialogFormVisible: false,
      isEdit: false,
      form: {
        userName: "",
        userDescription: "",
        imageUrl:"",
        file:""
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getPercent() {
      if (typeof this.userData.userExperience === "undefined") return 0;
      return (this.userData.userExperience % 20) * 100;
    },
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      this.form.imageUrl = URL.createObjectURL(file);
      this.form.file = file
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      return false;
    },
    aa(){
      this.form.file.userID = this.userData.userID
      if(this.isEdit)
        console.log('要修改',console.log(this.form))
      else
        console.log('不修改',console.log(this.form))
    }
  },
  mounted() {
    var userData = JSON.parse(localStorage.getItem("user"));
    this.userData = userData;
  },
};
</script>

<style scoped>
#currentUserInformation {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
#userName {
  font-size: 20px;
  text-align: center;
  border-bottom: 1px dashed #cdcdcd;
}
#userIcon {
  width: 150px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 10px;
}
#userData {
  margin-top: 37.2px;
  margin-left: 10px;
}
#level {
  margin-right: 15px;
}
.el-progress {
  margin-top: 10px;
  margin-bottom: 10px;
}
.avatar-uploader{
    float: left;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 178px;
}
.avatar-uploader:hover {
    border-color: #409EFF;
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
p {
  margin: 0;
}
</style>