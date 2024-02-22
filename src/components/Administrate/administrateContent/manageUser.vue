<template>
  <div id="manageUser">
    <el-table
    :data="tableData"
    style="width: 100%"
    :border="true"
    >
        <el-table-column
            prop="date"
            label="用户ID"
            width="100">
        </el-table-column>
        <el-table-column
            prop="name"
            label="用户名称"
            width="200">
        </el-table-column>
        <el-table-column
            prop="province"
            label="用户邮箱"
            width="250">
        </el-table-column>
        <el-table-column
            prop="city"
            label="用户权限"
            width="200">
        </el-table-column>
        <el-table-column
            label="操作"
            width="400">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                size="mini">
                    封号
                </el-button>
                <el-button
                @click="handleEdit(scope.$index, scope.row)"
                size="mini">
                    禁言
                </el-button>
                <el-button
                @click="handleEdit(scope.$index, scope.row)"
                size="mini">
                    禁止上传下载
                </el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">
                    删除用户
                </el-button>
            </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style>
#manageUser{
    margin-left: 60px;
    margin-top: 20px;
    margin-bottom: 40px;
}
</style>