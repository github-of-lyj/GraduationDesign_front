<template>
  <div id="replyContent">
    <div id="mainAnswer">
      <p>发表时间</p>
    </div>
    <div id="answerData">
      <div id="answerInfomation">这是回答的一些信息</div>
      <otherReply></otherReply>
    </div>
  </div>
</template>

<script scoped>
import otherReply from "./otherReply"
export default {
  components:{otherReply},
  data() {
    return {
      number:1
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style>
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