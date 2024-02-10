<template>
  <div id="userContent">
    <currentUserInformation></currentUserInformation>
    <currentUserHistory></currentUserHistory>
  </div>
</template>

<script>
import currentUserInformation from '../../components/User/currentUserInformation'
import currentUserHistory from '../../components/User/currentUserHistory'
export default {
    components:{currentUserInformation,currentUserHistory}
}
</script>

<style scoped>

#userContent{
    display: flex;
    margin: 15px;
}

</style>