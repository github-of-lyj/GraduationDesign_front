<template>
  <div id="forumHeader">
    <goBack :pos='pos'></goBack>
    <informationSearchBox :initialInputWords="initialInputWords"></informationSearchBox>
  </div>
</template>

<script>
import goBack from "./goBack"
import informationSearchBox from "./informationSearchBox"
export default {
    components:{goBack,informationSearchBox},
    props:['initialInputWords','pos']

}
</script>
<style>
#forumHeader{
  display: flex;
  justify-content: center;
}

</style>

