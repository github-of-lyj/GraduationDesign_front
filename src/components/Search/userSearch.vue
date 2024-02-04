<template>
  <div style="display: flex;justify-content: center;">
    <div id="userSearch">
      <div id="user">
        <img src="../../assets/orange.jpg" id="userIcon" />
        <div id="userData">
          <router-link class="el-icon-user" :to="{
            name: 'User',
            params: {
              userid: 3
            }
          }">userName</router-link>
          <span class="el-icon-star-off">level</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  display: grid;
  text-align: center;
}

span {
  padding: 1px;
}
</style>