<template>
  <div id="manageReport">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="举报理由">
              <span>{{ props.row.reportReason }}</span>
            </el-form-item>
            <el-form-item label="举报描述">
              <span>{{ props.row.reportDescription }}</span>
            </el-form-item>
            <el-form-item label="举报用户">
              <span>{{ props.row.reportUser }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="举报内容类别" prop="reportContentPosition" > </el-table-column>
      <el-table-column label="举报内容ID" prop="reportContentID"> </el-table-column>
      <el-table-column label="举报内容" prop="reportContent"> </el-table-column>
      <el-table-column label="发表用户" prop="publishUser"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted(){
    pubsub.subscribe('getReportByIF',(msgName,searchField) => {
        if(searchField === ''){
            axios.get('http://192.168.23.129/user/Report/selectReport/all').then(
                (response) => {
                    this.tableData = response.data
                },
                (error) => {
                    console.log(error)
                }
            )
        }
    })
    pubsub.publish('getReportByIF','')
  }
};
</script>

<style scoped>
#manageReport {
  width: 1000px;
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.demo-table-expand {
  font-size: 0;
  padding: 20px 50px;
  padding-top: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  
}
</style>