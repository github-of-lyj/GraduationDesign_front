<template>
  <div id="userInformation">
    <div>
      <div id="userName">
        <span>{{userData.userName}}</span>
      </div>
      <img v-if="userData.userAvatar" :src="`http://192.168.23.129/user/file/getUserAvatar/${userData.userAvatar}`" id="userIcon" />
      <div style="text-align: center;">
        <el-tooltip class="item" effect="dark" content="返回" placement="bottom-start">
          <el-button type="primary" icon="el-icon-back" size="mini" @click="goBack"></el-button>
        </el-tooltip>
      </div>
    </div>
    <div id="userData">
      <div>
        <span id="level">用户等级:{{getLevel()}}</span>
        <span id="experience">用户经验:{{getExperience()}}</span>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="getPercent()"></el-progress>
      </div>
      <p style="margin-bottom: 5px;">用户简介：</p>
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
import axios from 'axios';
export default {
  data() {
    return {
      userData: {},
    };
  },
  methods:{
    goBack(){
      this.$router.back()
    },
    getLevel() {
      if (typeof this.userData.userExperience === "undefined") return 0;
      return parseInt((this.userData.userExperience / 20)) + 1;
    },
    getExperience() {
      if (typeof this.userData.userExperience === "undefined") return 0;
      return (this.userData.userExperience % 20);
    },
    getPercent() {
      if (typeof this.userData.userExperience === "undefined") return 0;
      return (this.userData.userExperience % 20) * 5;
    },
    
  },
  mounted(){
    axios.get(`http://192.168.23.129/user/UserSearch/selectUser/${this.$route.params.userid}`).then(
      (response) => {
        this.userData = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#userInformation {
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