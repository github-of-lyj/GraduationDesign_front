<template>
  <div id="userData">
    <ul>
      <li>
        <div id="userName">
          <router-link v-if="userData.userID" class="el-icon-user" :to="{
            name: 'User',
            params:{
              userid: userData.userID
            }
          }">{{userData.userName}}</router-link>
        </div>
      </li>
      <li><img v-if="userData.userAvatar" :src="`http://localhost:8080/user/file/getUserAvatar/${this.userData.userAvatar}`" id="userIcon" /></li>
      <li>
        <div id="userInformation">
          <table>
            <tbody>
              <th id="level">
                <p>{{getLevel()}}</p>
                <p>等级</p>
              </th>
              <th id="experience">
                <p>{{getExperience()}}</p>
                <p>经验</p>
              </th>
              <th>
                <p>{{postCount}}</p>
                <p>帖子</p>
              </th>
            </tbody>
          </table>
        </div>
      </li>
      <li id="demo">
        <div id="progress">
          <el-progress :text-inside="true" :stroke-width="20" :percentage="getPercent()">
          </el-progress>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userData: {},
      postCount: '',
    };
  },
  props:['userName'],
  methods:{
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
    axios.get(`http://localhost:8080/user/getUser/${this.userName}`).then(
      (response) => {
        this.userData = response.data
      },
      (error) => {
        console.log(error)
      }
    )
    axios.get(`http://localhost:8080/user/post/getUserPostNumber/${this.userName}`).then(
      (response) => {
        this.postCount = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }

};
</script>

<style scoped>
#userData {
  background-color: #fafbfc;
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px #c2d5e3 solid;
}
#userName {
  border-bottom: 1px dashed #cdcdcd;
}
#userIcon {
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 10px;
}
#userInformation {
  display: flex;
  justify-content: center;
  padding: 0 10px 10px 10px;
}
#level,#experience{
    border-right: 1px solid #ccc;
}
#demo{
  display: flex;
  justify-content: center;
}
#progress{
  width: 120px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
th {
  text-align: center;
  font-size: 12px;
  width: 40px;
}
p{
  margin: 0;
}
</style>