<template>
  <div id="latestReply">
    <classHead
      classTitle="最新回复"
      :isPage="false"
      className="el-icon-chat-dot-square"
    ></classHead>
    <div id="replyItem">
      <ul>
        <li>
          <replyLeft></replyLeft>
          <replyRight></replyRight>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import classHead from "../classHead";
import replyLeft from "./replyLeft"
import replyRight from "./replyRight"
export default {
  components: { classHead , replyLeft, replyRight},
};
</script>

<style scoped>
#latestReply {
  margin: 15px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
  padding: 16px;
}

ul {
  margin: 0;
  margin-top: 10px;
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
}
</style>