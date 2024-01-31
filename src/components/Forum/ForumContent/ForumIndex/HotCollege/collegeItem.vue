<template>
  <div>
    <router-link to="/forum/index" id="collegeItem">
      <img src="../../../../../assets/orange.jpg" />
      <div id="collegeData">
        <p id="collegeName">collegeName</p>
        <p id="postNumber"><i class="el-icon-user"></i> postNumber</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#collegeItem {
  display: flex;
}
#collegeData {
  margin-left: 5px;
}
#collegeName {
  font-size: 15px;
  color: black;
}
#postNumber {
  font-size: 12px;
  color: #949494;
}
p {
  margin: 0;
}
</style>