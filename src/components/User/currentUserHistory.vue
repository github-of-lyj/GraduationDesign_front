<template>
  <div id="currentUserHistory">
    <el-tabs>
      <el-tab-pane>
        <span slot="label" class="fontClass">我的帖子</span>
        <div>
            <currentUserPostItem></currentUserPostItem>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" class="fontClass">我的发言</span>
        <div>
            <currentUserReplyItem></currentUserReplyItem>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" class="fontClass">我对其他用户的回复</span>
        <div>
            <currentUserReplyItem></currentUserReplyItem>
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
import currentUserPostItem from "./currentUserHistory/currentUserPostItem"
import currentUserReplyItem from './currentUserHistory/currentUserReplyItem';
export default {
  data() {
    return {
      pageSize: 5,
      curPage: 0,
      length,
    };
  },
  components:{currentUserPostItem,currentUserReplyItem}
};
</script>

<style scoped>
#currentUserHistory {
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