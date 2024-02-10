<template>
  <div id="currentUserInformation">
    <div>
      <div id="userName">
        <span class="el-icon-user">userName</span>
      </div>
      <img src="../../assets/orange.jpg" id="userIcon" />
      <div style="text-align: center;">
        <el-tooltip class="item" effect="dark" content="返回" placement="bottom-start">
          <el-button type="primary" icon="el-icon-back" size="mini" @click="goBack"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="编辑" placement="bottom-start">
          <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
        </el-tooltip>
      </div>
    </div>
    <div id="userData">
      <div>
        <span id="level">用户等级:10</span>
        <span id="experience">用户经验:15</span>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
      </div>
      <p style="margin-bottom: 5px;">用户简介：</p>
      <el-input
        type="textarea"
        rows="4"
        maxlength="50"
        v-model="userIntroduce"
        resize="none"
        :disabled="true"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userIntroduce: "你好！世界",
    };
  },
  methods:{
    goBack(){
      this.$router.back()
    }
    
  }
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
#level{
  margin-right: 15px;
}
.el-progress{
  margin-top:10px;
  margin-bottom:10px;
}
p {
  margin: 0;
}
</style>