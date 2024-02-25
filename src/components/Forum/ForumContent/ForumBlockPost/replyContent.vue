<template>
  <div id="replyContent">
    <div id="mainAnswer">
      <p>{{postReply.postReplyTime}}</p>
      <div id="Dialog">
        <administrateDialog :reportContentData = reportContentData></administrateDialog>
      </div>
    </div>
    <div id="answerData">
      <div id="answerInfomation">{{postReply.postReplyContent}}</div>
      <otherReply :postReplyID = postReply.postReplyID></otherReply>

    </div>
  </div>
</template>

<script scoped>
import otherReply from "./otherReply"
import administrateDialog from '../../../Administrate/administrateDialog'
export default {
  components:{otherReply,administrateDialog},
  data() {
    return {
      reportContentData:{
        reportContentPosition:"帖子回复",
        reportContentID:this.postReply.postReplyID,
        reportContent:this.postReply.postReplyContent,
        publishUser:this.postReply.userName,
      }
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  props:['postReply']
};
</script>

<style scoped>
#replyContent {
  width: 100%;
  padding: 20px;
  padding-top: 0;
}
#mainAnswer {
  display: flex;
  padding: 20px 20px 0 0;
  border-bottom: 1px dashed #cdcdcd;
}
#answerInfomation {
  margin-top: 30px;
  height: 180px;
}
#Dialog{
  position: relative;
  left: 635px;
}

p {
  margin: 0;
}
</style>