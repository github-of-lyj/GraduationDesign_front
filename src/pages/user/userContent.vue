<template>
  <div id="userContent">
    <userInformation></userInformation>
    <userHistory></userHistory>
  </div>
</template>

<script>
import userInformation from '../../components/User/userInformation'
import userHistory from '../../components/User/userHistory'
export default {
    components:{userInformation,userHistory}
}
</script>

<style scoped>

#userContent{
    display: flex;
    margin: 15px;
}

</style>