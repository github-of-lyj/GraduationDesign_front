<template>
  <div id="hotCollege">
    <classHead
      classTitle="热点院校"
      isPage="true"
      className="el-icon-house"
    ></classHead>
    <div id="collegeList">
      <ul>
        <li>
          <collegeItem></collegeItem>
        </li>
        <li>
          <collegeItem></collegeItem>
        </li>
        <li>
          <collegeItem></collegeItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import classHead from "../classHead.vue";
import collegeItem from "./collegeItem.vue";
export default {
  components: { classHead, collegeItem },
};
</script>

<style scoped>
#hotCollege {
  border: 1px solid rgba(230, 230, 230, 1);
  margin: 15px;
  padding: 16px;
}
img {
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  float: left;
  margin-right: 5px;
}
</style>