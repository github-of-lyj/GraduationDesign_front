<template>
  <div id="postHeader">
    <div id="headerPart1">回复:{{postData.replyNumber}}</div>
    <div id="headerPart2">
      <router-link :to="{
        name:'ForumBlockPage',
        params:{
          blockid:1
        }
      }">{{postData.blockName}}</router-link> >> {{postData.postTitle}}
    </div>
  </div>
</template>

<script>
export default {
  props:['postData']
};
</script>

<style scoped>
#postHeader {
  display: flex;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 5px;
}
#headerPart1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141.6px;
  color: #999 !important;
  font-size: 12px;
}
#headerPart2 {
  padding-left: 20px;
  font-weight: bold;
  font-size: 15px;
}
</style>