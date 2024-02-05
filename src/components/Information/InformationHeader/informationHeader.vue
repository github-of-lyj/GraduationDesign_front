<template>
  <div id="forumHeader">
    <informationSearchBox></informationSearchBox>
  </div>
</template>

<script>
import informationSearchBox from "./informationSearchBox"
export default {
    components:{informationSearchBox},
}
</script>
<style>
#forumHeader{
  display: flex;
  justify-content: center;
}

</style>

