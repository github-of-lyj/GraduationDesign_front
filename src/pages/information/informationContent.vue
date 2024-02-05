<template>
  <div>
    <informationHeader :initialInputWords='$route.params.searchname' pos=-2></informationHeader>
    <informationData></informationData>
  </div>
</template>

<script>
import informationHeader from "../../components/Information/InformationHeader/informationHeader"
import informationData from "../../components/Information/InformationData/informationData"
export default {
  components:{informationHeader,informationData}

}
</script>

<style>

</style>