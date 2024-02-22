<template>
  <div>
    <administrateBox></administrateBox>
    <div id="administrateContent">
        <administrateSide></administrateSide>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import administrateSide from '../../components/Administrate/administrateSide'
import administrateBox from '../../components/Administrate/administrateBox'
export default {
    components:{administrateSide,administrateBox}
}
</script>

<style>
#administrateContent{
  display: flex;
}


</style>