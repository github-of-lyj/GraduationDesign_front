<template>
  <div id="postHeader">
    <div id="headerPart1">查看:xx | 回复:xx</div>
    <div id="headerPart2">帖子名称</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#postHeader {
  display: flex;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 5px;
}
#headerPart1 {
  width: 141.6px;
  color: #999 !important;
  font-size: 12px;
  text-align: center;
}
#headerPart2 {
  padding-left: 20px;
  font-weight: bold;
  font-size: 15px;
}
</style>