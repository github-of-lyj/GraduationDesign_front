<template>
  <div style="display: flex; justify-content: space-between">
    <div style="display: flex; align-items: center">
      <router-link
        id="nameRouter"
        :to="{
          name: 'User',
          params: {
            userid: 3,
          },
        }"
        style="color: #2d64b3"
      >
        {{ userReply.userName }}：
      </router-link>
      <p id="postContent">{{ userReply.userReplyContent }}</p>
    </div>
    <p id="time">{{ userReply.userReplyTime }}</p>
    <administrateDialog :reportContentData = reportContentData></administrateDialog>
  </div>
</template>

<script>
import administrateDialog from '../../../Administrate/administrateDialog'
export default {
    data() {
        return {
            reportContentData:{
                reportContentPosition:"用户回复",
                reportContentID:this.userReply.userReplyID,
                reportContent:this.userReply.userReplyContent,
                publishUser:this.userReply.userName,
            }
        };
    },
    components:{administrateDialog},
    props:['userReply']
};
</script>

<style scoped>
#nameRouter {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
#postContent {
  width: 200px;
  font-size: 12px;
  overflow-wrap: break-word;
  color: #949494;
  margin: 0;
}
#time {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 0;
  margin-right: 20px;
}
</style>