<template>
  <div id="forumBlockHeader">
    <div id="blockTitle">
      <blockIcon></blockIcon>
      <blockHeaderInformation></blockHeaderInformation>
    </div>
    <div id="blockIntroduce">
      <p>这是一段测试的介绍文本</p>
    </div>
  </div>
</template>

<script>
import blockHeaderInformation from "./BlockHeader/blockHeaderInformation";
import blockIcon from "./BlockHeader/blockIcon";
export default {
  components: { blockHeaderInformation, blockIcon },
};
</script>

<style scoped>
#forumBlockHeader {
  display: flex;
  margin-left: 20px;
  padding: 20px;
  height: 120px;
  border-bottom: 0;
  border-radius: 10px 10px 0px 0px;
}
#blockTitle {
  display: flex;
}
#blockIntroduce{
  margin-left: 20px;
}
#blockIntroduce p {
  font-weight: bold;
  margin-left: 40px;
  margin: 0;
  font-size: 14px;
}
</style>