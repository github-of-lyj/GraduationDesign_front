<template>
  <div>
    <router-link
      :to="{
        name: 'ForumBlockPage',
        params: {
          blockid: BlockData.blockID,
        },
      }"
      id="blockItem"
    >
      <img src="../../../../../assets/orange.jpg" />
      <div id="collegeData">
        <p id="collegeName">{{BlockData.blockName}}</p>
        <p id="postNumber">
          <i class="el-icon-chat-line-square"></i> {{BlockData.postNumber}}
        </p>
        <p id="postNumber"><i class="el-icon-user"></i> {{BlockData.followers}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props:['BlockData']
};
</script>

<style scoped>
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
</style>