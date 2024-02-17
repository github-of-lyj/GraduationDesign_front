<template>
  <div id="replyContent">
    <div id="mainAnswer">
      <p>{{postReply.postReplyTime}}</p>
    </div>
    <div id="answerData">
      <div id="answerInfomation">{{postReply.postReplyContent}}</div>
      <otherReply :postReplyID = postReply.postReplyID></otherReply>
    </div>
  </div>
</template>

<script scoped>
import otherReply from "./otherReply"
export default {
  components:{otherReply},
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
  padding: 20px 20px 0 0;
  border-bottom: 1px dashed #cdcdcd;
}
#answerInfomation {
  margin-top: 30px;
  height: 180px;
}

p {
  margin: 0;
}
</style>