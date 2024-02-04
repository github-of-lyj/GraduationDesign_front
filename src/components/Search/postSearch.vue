<template>
  <div id="postSearch">
    <div class="divider"></div>
    <div>
      <postResult></postResult>
    </div>
    <div class="divider"></div>
    <div>
      <replyResult></replyResult>
    </div>
  </div>
</template>

<script>
import postResult from "./PostSearch/postResult"
import replyResult from "./PostSearch/replyResult"
export default {
  components:{postResult,replyResult}
};
</script>

<style scoped>
#postSearch {
  justify-content: center;
  display: flex;
  margin: 15px;
}
.divider {
  background-color: #DCDFE6;
  display: inline-block;
  width: 1px;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>