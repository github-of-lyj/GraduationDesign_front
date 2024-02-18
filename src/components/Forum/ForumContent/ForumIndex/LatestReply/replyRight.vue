<template>
  <div id="right">
    <div>
      <div id="author">
        <router-link :to="{
          name:'User',
          params:{
            userid: HotPostReply.userID
          }
        }">
          <i class="el-icon-user"></i> {{HotPostReply.userName}}
        </router-link>
      </div>
      <div id="date"><i class="el-icon-time"></i> {{HotPostReply.postReplyTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['HotPostReply']
};
</script>

<style>
#right {
  display: flex;
  align-items: center;
  font-size: 10px;
}
a {
  text-decoration: none;
}
</style>