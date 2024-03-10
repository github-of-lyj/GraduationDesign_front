<template>
  <div>
    <span class="el-icon-warning-outline" @click="dialogVisible = true"></span>
    <el-dialog
      title="举报"
      :visible.sync="dialogVisible"
      width="50%"
      @closed="sendReport"
    >
      <el-form>
        <el-form-item label="举报内容类别" :label-width="formLabelWidth">
          <el-input v-model="reportData.reportContentPosition" :disabled="true">
          </el-input>
        </el-form-item>
        <el-form-item label="举报内容ID" :label-width="formLabelWidth">
          <el-input v-model="reportData.reportContentID" :disabled="true">
          </el-input>
        </el-form-item>
        <el-form-item label="举报内容" :label-width="formLabelWidth">
          <el-input v-model="reportData.reportContent" :disabled="true">
          </el-input>
        </el-form-item>
        <el-form-item label="发表用户" :label-width="formLabelWidth">
          <el-input v-model="reportData.publishUser" :disabled="true">
          </el-input>
        </el-form-item>
        <el-form-item label="举报理由" :label-width="formLabelWidth">
          <template>
            <el-select v-model="reportData.reportReason" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="举报描述" :label-width="formLabelWidth">
          <el-input
            v-model="reportData.reportDescription"
            autocomplete="off"
            type="textarea"
            resize="none"
            rows="4"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            dialogVisible = false;
            isSend = false;
          "
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="
            dialogVisible = false;
            isSend = true;
          "
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      reportData: {
        reportContentPosition: this.reportContentData.reportContentPosition,
        reportContentID: this.reportContentData.reportContentID,
        reportContent: this.reportContentData.reportContent,
        publishUser: this.reportContentData.publishUser,
        reportReason: "其他",
        reportDescription: "",
        reportUser: "",
      },
      isSend: false,
      dialogVisible: false,
      formLabelWidth: "120px",
      options: [
        {
          value: "政治",
          label: "政治",
        },
        {
          value: "色情",
          label: "色情",
        },
        {
          value: "其他",
          label: "其他",
        },
      ],
    };
  },
  props: ["reportContentData"],
  methods: {
    sendReport() {
      if (this.isSend) {
        if (this.reportData.reportDescription === "") {
          this.$message({
            message: "描述不可为空",
            type: "info",
          });
        } else {
          var userData = JSON.parse(localStorage.getItem("user"));
          if (userData != null) {
            this.reportData.reportUser = userData.userName
            axios.post('http://192.168.23.129/user/Report/insertNewReport',this.reportData).then(
                () => {
                    this.$message({
                    message: "感谢你为维护社区做出的贡献，我们会尽快核实",
                    type: "success",
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
          } else {
            this.$message({
              message: "用户未登录",
            });
          }
        }
      }
    },
  },
};
</script>

<style>
</style>