<template>
  <div id="userHistory">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">该用户的帖子</span>
        <div>
            <userPostItem></userPostItem>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" class="fontClass">该用户的回复</span>
        <div>
            <userReplyItem></userReplyItem>
        </div>
      </el-tab-pane>
      <el-pagination
        small
        layout="prev, pager, next , jumper"
        :total="length"
        :page-size="pageSize"
      >
      </el-pagination>
    </el-tabs>
  </div>
</template>

<script>
import userPostItem from './UserHistory/userPostItem'
import userReplyItem from './UserHistory/userReplyItem'
export default {
  data() {
    return {
      pageSize: 5,
      curPage: 0,
      length,
    };
  },
  components:{userPostItem,userReplyItem}
};
</script>

<style scoped>
#userHistory {
  margin-left: 30px;
  width: 70%;
}
#newsList {
  width: 33%;
}
.el-tabs {
  width: 90%;
  height: 100%;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}
.fontClass {
  font-size: 20px;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>