<template>
  <div id="forumBlockPostItem">
    <ul>
      <li>
        <postItemLeft></postItemLeft>
        <postItemRight></postItemRight>
      </li>
    </ul>
  </div>
</template>

<script>
import postItemLeft from './BlockPostItem/postItemLeft'
import postItemRight from './BlockPostItem/postItemRight'
export default {
  components:{postItemLeft,postItemRight}
};
</script>

<style scoped>
#forumBlockPostItem {
  margin-left: 20px;
  width: 800px;
  border: 1px black solid;
  border-radius: 10px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
}

</style>