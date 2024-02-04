<template>
  <div>
    <informationHeader :initialInputWords='$route.params.searchname' pos=-2></informationHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import informationHeader from "../../components/Information/InformationHeader/informationHeader"
export default {
  components:{informationHeader}

}
</script>

<style>

</style>