<template>
  <div id="forumBlockPostItem">
    <ul>
      <li>
        <postItemLeft></postItemLeft>
        <postItemRight></postItemRight>
      </li>

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
  
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  
  display: flex;
  justify-content: space-between;
  border: 1px black dashed;
  border-radius: 10px;
  margin-bottom: 5px;
}

</style>