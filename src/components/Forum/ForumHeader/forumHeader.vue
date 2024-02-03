<template>
  <div id="forumHeader">
    <goBack></goBack>
    <searchBox></searchBox>
  </div>
</template>

<script>
import goBack from "./goBack"
import searchBox from "./searchBox"
export default {
    components:{goBack,searchBox}

}
</script>
<style>
#forumHeader{
  display: flex;
  justify-content: center;
}

</style>