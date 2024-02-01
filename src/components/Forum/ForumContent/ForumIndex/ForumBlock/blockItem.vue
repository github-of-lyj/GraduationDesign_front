<template>
  <div>
    <router-link to="/forum/index" id="blockItem">
      <img src="../../../../../assets/orange.jpg" />
      <div id="collegeData">
        <p id="collegeName">blockName</p>
        <p id="postNumber">
          <i class="el-icon-chat-line-square"></i>帖数:postNumber
        </p>
        <p id="postNumber"><i class="el-icon-time"></i>最后发表:postNumber</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#blockItem {
  margin-top: 10px;
  margin-right: 40px;
  display: flex;
}
#collegeData {
  margin-left: 5px;
}
#collegeName {
  font-size: 20px;
  color: black;
}
#postNumber {
  font-size: 15px;
  color: #949494;
}
p {
  margin: 0;
}
img {
  height: 80px;
  margin-right: 5px;
}
</style>