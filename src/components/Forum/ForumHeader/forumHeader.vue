<template>
  <div id="forumHeader">
    <goBack :pos='pos'></goBack>
    <searchBox :initialInputWords="initialInputWords"></searchBox>
  </div>
</template>

<script>
import goBack from "./goBack"
import searchBox from "./searchBox"
export default {
    components:{goBack,searchBox},
    props:['initialInputWords','pos']

}
</script>
<style>
#forumHeader{
  display: flex;
  justify-content: center;
}

</style>