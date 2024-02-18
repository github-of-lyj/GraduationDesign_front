<template>
  <div>
    <div v-if="!(UserSearchList.length)" id="nullResult">
      <p>查询结果为空  ≥﹏≤</p>
    </div>
    <div style="display: flex;justify-content: center;">
      <div id="userSearch">
        <div id="user" v-for="user in UserSearchList" :key="user.userID">
          <img :src="`http://localhost:8080/user/file/getUserAvatar/${user.userAvatar}`" id="userIcon" />
          <div id="userData">
            <router-link class="el-icon-user" :to="{
              name: 'User',
              params: {
                userid: user.userID
              }
            }">{{user.userName}}</router-link>
            <span class="el-icon-star-off">等级：{{user.userLevel}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      UserSearchList: {},
    };
  },
  mounted(){
    axios.get(`http://localhost:8080/user/UserSearch/getUser/${this.$route.params.searchname}`).then(
      (response) => {
        this.UserSearchList = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#nullResult{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
#userSearch {
  margin: 15px;
  display: flex;
  width: 800px;
  flex-wrap: wrap;
}
#user {
  font-size: 15px;
  padding: 20px;
}
#userIcon {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
#userData {
  margin-top:5px;
  display: grid;
  justify-content: center;
}

span {
  padding: 1px;
}
a{
  margin-bottom: 5px;
}
</style>