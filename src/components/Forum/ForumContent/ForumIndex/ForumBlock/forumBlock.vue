<template>
  <div id="forumBlock">
    <blockHead></blockHead>
    <ul>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
    </ul>
    <blockHead></blockHead>
    <ul>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
      <li>
        <blockItem></blockItem>
      </li>
    </ul>
  </div>
</template>

<script>
import blockHead from "./blockHead";
import blockItem from "./blockItem";
export default {
  components: { blockHead, blockItem },
};
</script>

<style scoped>
#forumBlock {
  margin: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 1135px;
}
</style>