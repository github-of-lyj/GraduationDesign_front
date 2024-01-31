<template>
  <div id="hotPost">
    <classHead classTitle="热帖" :isPage="false" className="el-icon-chat-line-square"></classHead>
    <div id="hotPostItem">
      <ul>
        <li>
          <postLeft></postLeft>
          <postRight></postRight>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import classHead from "../classHead.vue"
import postLeft from "./postLeft.vue"
import postRight from "./postRight.vue"
export default {
  components:{classHead,postLeft,postRight}
};
</script>

<style scoped>
#hotPost {
  margin: 15px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
  padding: 16px;
}
#hotPostItem{
  display: flex;
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